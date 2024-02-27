import { Mcc } from "../../Mcc"
import { groupLinesByCondition } from "../../utilities"
import { parseTccDescCategory } from "./commonParse"

export class RangeSectionParser {
	constructor(public section: string) {}

	parseCodeAndName(): Pick<Mcc.Range, "code" | "name"> | undefined {
		const match = this.section.match(/^MCCs (?<from>\d{4}) through (?<to>\d{4}): (?<name>.+)\n/)
		return match?.groups
			? { code: { from: match.groups.from, to: match.groups.to }, name: match.groups.name }
			: undefined
	}

	parseAbSubGroup(group: string) {
		const result = group.match(/^(?<value>\w+) for MCCs (?<mcc>(.|\n)*)$/)
		return [
			result?.groups?.value,
			result?.groups?.mcc
				.split(/,|and| |\n/g)
				?.map(m => m.trim())
				.filter(m => m),
		] as [string, string[]]
	}

	parseAbGlobalPrograms(): Mcc.Range["abPrograms"]["global"] {
		const matchGlobal = this.section.match(/AB Programs Global: (?<global>(\w+,? ?\n?)+)(\nCountry|$)/)
		const globalString = matchGlobal?.groups?.global
		const result: Mcc.Range["abPrograms"]["global"] = { mcc: {} }
		if (globalString) {
			const groups = groupLinesByCondition(globalString, line => line.includes(" for "), { includeFirst: true })
			result.mcc = Object.fromEntries(groups[0].split(",").map((v): [string, "all"] => [v.trim(), "all"]))
			result.mcc = { ...result.mcc, ...Object.fromEntries(groups.slice(1).map(g => this.parseAbSubGroup(g))) }
		}
		return result
	}

	parseAbCountryPrograms(): Mcc.Range["abPrograms"]["countrySpecific"] {
		const matchCountry = this.section.match(/\nCountry-specific: (?<country>[^$]+)/)
		const countryString = matchCountry?.groups?.country
		const result: Mcc.Range["abPrograms"]["countrySpecific"] = { mcc: {} }
		if (countryString) {
			const groups = groupLinesByCondition(countryString, line => line.includes(" for "), { includeFirst: true })
			result.mcc = Object.fromEntries(groups[0].split(",").map((v): [string, "all"] => [v.trim(), "all"]))
			result.mcc = { ...result.mcc, ...Object.fromEntries(groups.slice(1).map(g => this.parseAbSubGroup(g))) }
		}
		return result
	}

	parse(): Partial<Mcc.Range> {
		const codeAndName = this.parseCodeAndName()
		const tccDescCategory = parseTccDescCategory(this.section)
		const global = this.parseAbGlobalPrograms()
		const countrySpecific = this.parseAbCountryPrograms()

		return { ...codeAndName, ...tccDescCategory, abPrograms: { global, countrySpecific } }
	}
}
