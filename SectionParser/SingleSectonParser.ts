import { Mcc } from "../Mcc"
import { measureTime } from "../measureTime"
import { parseTccDescCategory } from "./commonParse"

export class SingleSectionParser {
	constructor(public section: string) {}

	parseCodeAndName(): Pick<Mcc, "code" | "name"> | undefined {
		const match = this.section.match(/^MCC (?<code>\d{4}): (?<name>.+)\n/)
		return match?.groups ? { code: match.groups.code, name: match.groups.name } : undefined
	}

	parseAbGlobalPrograms() {
		const matchGlobal = this.section.match(/AB Programs Global: (?<global>(\w+,? ?\n?)+)(\nCountry|$)/)
		return matchGlobal?.groups?.global.replaceAll("\n", "").replaceAll(" ", "").split(",")
	}
	parseAbCountryPrograms() {
		const matchCountry = this.section.match(/\nCountry-specific: (?<country>(\w+,?( |\n)?)+)$/)
		return matchCountry?.groups?.country.replaceAll("\n", "").replaceAll(" ", "").split(",")
	}

	parse(): Partial<Mcc> {
		const codeAndName = measureTime(this.parseCodeAndName, this)
		const tccDescCategory = measureTime(parseTccDescCategory, this, this.section)
		const global = measureTime(this.parseAbGlobalPrograms, this)
		// const countrySpecific = measureTime(this.parseAbCountryPrograms, this) // takes super long

		return {
			...codeAndName,
			...tccDescCategory,
			abPrograms: {
				global,
				/* countrySpecific */
			},
		}
	}
}
