import { MccRange } from "../../Mcc"
import { groupLinesByCondition } from "../../utilities"
import { parseTccDescCategory } from "./commonParse"

export class RangeSectionParser {
	constructor(public section: string) {}

	parseCodeAndName(): Pick<MccRange, "code" | "name"> | undefined {
		const match = this.section.match(/^MCCs (?<from>\d{4}) through (?<to>\d{4}): (?<name>.+)\n/)
		console.log("codeName group", match?.groups)
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

	parseAbGlobalPrograms(): MccRange["abPrograms"]["global"] {
		const matchGlobal = this.section.match(/AB Programs Global: (?<global>(\w+,? ?\n?)+)(\nCountry|$)/)
		console.log("globalMatchGroup", matchGlobal?.groups?.global)
		const globalString = matchGlobal?.groups?.global
		const result: MccRange["abPrograms"]["global"] = { mcc: {} }
		console.log({ globalString })
		if (globalString) {
			const groups = groupLinesByCondition(globalString, line => line.includes(" for "), { includeFirst: true })
			result.mcc = Object.fromEntries(groups[0].split(",").map((v): [string, "all"] => [v.trim(), "all"]))
			result.mcc = { ...result.mcc, ...Object.fromEntries(groups.slice(1).map(g => this.parseAbSubGroup(g))) }
			console.log("result.mcc", result.mcc)
		}
		return result
	}

	parseAbCountryPrograms(): MccRange["abPrograms"]["countrySpecific"] {
		const matchCountry = this.section.match(/\nCountry-specific: (?<country>[^$]+)/)
		console.log("countryMatchGroup", matchCountry?.groups?.country)
		const countryString = matchCountry?.groups?.country
		const result: MccRange["abPrograms"]["countrySpecific"] = { mcc: {} }
		console.log({ countryString })
		if (countryString) {
			const groups = groupLinesByCondition(countryString, line => line.includes(" for "), { includeFirst: true })
			result.mcc = Object.fromEntries(groups[0].split(",").map((v): [string, "all"] => [v.trim(), "all"]))
			result.mcc = { ...result.mcc, ...Object.fromEntries(groups.slice(1).map(g => this.parseAbSubGroup(g))) }
			console.log("result.mcc", result.mcc)
		}
		return result
	}

	parse(): Partial<MccRange> {
		const codeAndName = this.parseCodeAndName()
		const tccDescCategory = parseTccDescCategory(this.section)
		const global = this.parseAbGlobalPrograms()
		const countrySpecific = this.parseAbCountryPrograms()

		return { ...codeAndName, ...tccDescCategory, abPrograms: { global, countrySpecific } }
	}
}
