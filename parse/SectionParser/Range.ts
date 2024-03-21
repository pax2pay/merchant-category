import { Category as Category } from "../../Category"
import { groupLinesByCondition } from "../groupLinesByCondition"
import { parseTccDescriptionCategory as parseTccDescriptionCategory } from "./parseTccDescriptionCategory"

export class Range {
	constructor(readonly section: string) {}
	private parseCodeAndName(): Pick<Category.Range, "code" | "name"> | undefined {
		const match = this.section.match(/^MCCs (?<from>\d{4}) through (?<to>\d{4}): (?<name>.+)\n/)
		return match?.groups
			? { code: { from: match.groups.from, to: match.groups.to }, name: match.groups.name }
			: undefined
	}
	private parseAbSubGroup(group: string) {
		const result = group.match(/^(?<value>\w+) for MCCs (?<mcc>(.|\n)*)$/)
		return [
			result?.groups?.value,
			result?.groups?.mcc
				.split(/,|and| |\n/g)
				?.map(m => m.trim())
				.filter(m => m),
		] as [string, string[]]
	}
	private parseAbGlobalPrograms(): Category.Range["abPrograms"]["global"] {
		const matchGlobal = this.section.match(/AB Programs Global: (?<global>(\w+,? ?\n?)+)(\nCountry|\(|$)/)
		const globalString = matchGlobal?.groups?.global
		const result: Category.Range["abPrograms"]["global"] = { mcc: {} }
		if (globalString) {
			const groups = groupLinesByCondition(globalString, line => line.includes(" for "), { includeFirst: true })
			result.mcc = {
				...Object.fromEntries(groups[0].split(",").map((v): [string, "all"] => [v.trim(), "all"])),
				...Object.fromEntries(groups.slice(1).map(g => this.parseAbSubGroup(g))),
			}
		}
		return result
	}
	private parseAbCountryPrograms(): Category.Range["abPrograms"]["countrySpecific"] {
		const matchCountry = this.section.match(/\nCountry-specific: (?<country>[^$]+)/)
		const countryString = matchCountry?.groups?.country
		const result: Category.Range["abPrograms"]["countrySpecific"] = { mcc: {} }
		if (countryString) {
			const groups = groupLinesByCondition(countryString, line => line.includes(" for "), { includeFirst: true })
			result.mcc = {
				...Object.fromEntries(groups[0].split(",").map((v): [string, "all"] => [v.trim(), "all"])),
				...Object.fromEntries(groups.slice(1).map(g => this.parseAbSubGroup(g))),
			}
		}
		return result
	}

	parse(): Category.Range | undefined {
		const codeAndName = this.parseCodeAndName()
		const tccDescriptionCategory = parseTccDescriptionCategory(this.section)
		const global = this.parseAbGlobalPrograms()
		const countrySpecific = this.parseAbCountryPrograms()
		const result = { ...codeAndName, ...tccDescriptionCategory, abPrograms: { global, countrySpecific } }
		return Category.Range.is(result) ? result : undefined
	}
}
