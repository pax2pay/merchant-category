import { isly } from "isly"
import { categories } from "./categories"
import { Code as CategoryCode } from "./Code"
import { Single as CategorySingle } from "./Single"

export type Category = Category.Single

export namespace Category {
	export const type: isly.Type<Category> = isly.named("merchant.Category", CategorySingle.type)
	export const is = type.is
	export const flaw = type.flaw

	export import Code = CategoryCode
	export import Single = CategorySingle

	export const all = categories as readonly Readonly<Category>[]

	export function load(code: string): Category.Single | undefined {
		return all.find(category => category.code == code)
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
	/**
	 * Lists the distinct category names whose MCCs intersect the inclusive range [from, to],
	 * ordered by first code occurrence. `from` and `to` are 4-digit code strings.
	 */
	export function intersect(from: string, to: string): string[] {
		const result: string[] = []
		for (const range of getRanges()) {
			if (range.from <= to && from <= range.to && !result.includes(range.category)) {
				result.push(range.category)
			}
		}
		return result
	}
	export function logIssues(category: Single) {
		if (!Code.is(category.code)) {
			console.error(`code ${category.code} is not valid mcc on ${category.name}`)
		}
	}
}
