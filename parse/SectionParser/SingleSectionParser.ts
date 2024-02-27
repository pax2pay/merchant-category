import { Mcc } from "../../Mcc"
import { parseTccDescCategory } from "./commonParse"

export class SingleSectionParser {
	constructor(public section: string) {}

	parseCodeAndName(): Pick<Mcc, "code" | "name"> | undefined {
		const match = this.section.match(/^MCC (?<code>\d{4}): (?<name>.+)\n/)
		return match?.groups ? { code: match.groups.code, name: match.groups.name } : undefined
	}

	parseAbGlobalPrograms() {
		const matchGlobal = this.section.match(/AB Programs Global: (?<global>([\w\-, .\n]+))\nCountry/)
		return matchGlobal?.groups?.global
			.replaceAll("\n", "")
			.replaceAll(" ", "")
			.split(/[,.]/)
			.filter(m => m)
	}
	parseAbCountryPrograms() {
		const matchCountry = this.section.match(/\nCountry-specific: (?<country>([^$])+)/)
		return matchCountry?.groups?.country
			.replaceAll("\n", "")
			.replaceAll(" ", "")
			.split(/[,.]/)
			.filter(m => m)
	}

	parse(): Partial<Mcc> {
		const codeAndName = this.parseCodeAndName()
		const tccDescCategory = parseTccDescCategory(this.section)
		const global = this.parseAbGlobalPrograms()
		const countrySpecific = this.parseAbCountryPrograms()

		return {
			...codeAndName,
			...tccDescCategory,
			abPrograms: {
				global,
				countrySpecific,
			},
		}
	}
}
