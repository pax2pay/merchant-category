import { isly } from "isly"
import { categories } from "./categories"
import { Code as CategoryCode } from "./Code"

export interface Category {
	readonly code: string // 4 digit code
	readonly name: string
	readonly tcc: string
	readonly description: string
	readonly category: string
	readonly abPrograms: {
		readonly global?: readonly string[]
		readonly countrySpecific?: readonly string[]
	}
}

export namespace Category {
	export const type = isly.object<Category>(
		{
			code: isly.string(/^\d{4}$/),
			name: isly.string(),
			tcc: isly.string(),
			description: isly.string(),
			category: isly.string(),
			abPrograms: isly.object({
				global: isly.string().array().optional(),
				countrySpecific: isly.string().array().optional(),
			}),
		},
		"merchant.Category"
	)
	export const is = type.is
	export const flaw = type.flaw

	export import Code = CategoryCode

	export const all = categories as readonly Readonly<Category>[]

	export function load(code: string): Category | undefined {
		return all.find(category => category.code == code)
	}
	export function belongs(category: Category, program: string): Category[] {
		return category.abPrograms?.global?.some(p => p == program) ||
			category.abPrograms?.countrySpecific?.some(p => p == program)
			? [category]
			: []
	}
	// reserved industry blocks; unassigned codes within still belong to the surrounding category
	const blocks = [
		{ from: "3000", to: "3350" }, // Airlines, Air Carriers
		{ from: "3351", to: "3500" }, // Car Rental Agencies
		{ from: "3501", to: "3999" }, // Lodging: Hotels, Motels, Resorts
	] as const
	let ranges: { from: string; to: string; category: string }[] | undefined
	function getRanges(): { from: string; to: string; category: string }[] {
		if (!ranges) {
			ranges = []
			for (const { code, category } of [...all].sort((left, right) => (left.code < right.code ? -1 : 1))) {
				const last = ranges[ranges.length - 1]
				if (last?.category == category) {
					last.to = code
				} else {
					ranges.push({ from: code, to: code, category })
				}
			}
			for (const range of ranges) {
				const block = blocks.find(b => b.from <= range.from && range.to <= b.to)
				if (block) {
					range.from = block.from
					range.to = block.to
				}
			}
		}
		return ranges
	}
	export interface Intersection {
		category: string
		ranges: { from: string; to: string }[]
	}
	/**
	 * Lists the categories whose MCCs intersect the inclusive range [from, to],
	 * ordered by first code occurrence, each with the full extent of its intersecting code ranges.
	 * `from` and `to` are 4-digit code strings.
	 */
	export function intersect(from: string, to: string): Intersection[] {
		const result: Intersection[] = []
		for (const range of getRanges()) {
			if (range.from <= to && from <= range.to) {
				const existing = result.find(intersection => intersection.category == range.category)
				if (existing) {
					existing.ranges.push({ from: range.from, to: range.to })
				} else {
					result.push({ category: range.category, ranges: [{ from: range.from, to: range.to }] })
				}
			}
		}
		return result
	}
	export function logIssues(category: Category) {
		if (!Code.is(category.code)) {
			console.error(`code ${category.code} is not valid mcc on ${category.name}`)
		}
	}
}
