import { MccRange } from "../Mcc"
import { measureTime } from "../measureTime"
import { groupLinesByCondition } from "../utilities"
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
				.split(/,|and/g)
				?.map(m => m.trim())
				.filter(m => m),
		] as [string, string[]]
	}

	parseAbGlobalPrograms(): MccRange["abPrograms"]["global"] | undefined {
		const matchGlobal = this.section.match(/AB Programs Global: (?<global>(\w+,? ?\n?)+)(\nCountry|$)/)
		console.log("globalMatchGroup", matchGlobal?.groups?.global)
		const globalString = matchGlobal?.groups?.global
		const result: MccRange["abPrograms"]["global"] = { mcc: {} }
		console.log({ globalString })
		if (globalString) {
			const groups = groupLinesByCondition(globalString, line => line.includes(" for "), { includeFirst: true })
			result.mcc = Object.fromEntries(groups[0].split(",").map((v): [string, undefined] => [v.trim(), undefined]))
			result.mcc = { ...result.mcc, ...Object.fromEntries(groups.slice(1).map(g => this.parseAbSubGroup(g))) }
			console.log("result.mcc", result.mcc)
		}
		return result
	}

	// parseAbCountryPrograms(): Pick<MccRange["abPrograms"], "countrySpecific"> {
	// 	const matchCountry = this.section.match(/\nCountry-specific: (?<country>(\w+,?( |\n)?)+)$/)
	// 	return matchCountry?.groups?.country.replaceAll("\n", "").replaceAll(" ", "").split(",")
	// }

	parse(): Partial<MccRange> {
		const codeAndName = measureTime(this.parseCodeAndName, this)
		const tccDescCategory = measureTime(parseTccDescCategory, this, this.section)
		const global = measureTime(this.parseAbGlobalPrograms, this)
		// const countrySpecific = measureTime(this.parseAbCountryPrograms, this) // takes super long

		return { ...codeAndName, ...tccDescCategory, abPrograms: { global /* countrySpecific */ } }
	}
}
