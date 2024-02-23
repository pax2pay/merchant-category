import { Mcc } from "./Mcc"

export class SectionParser {
	constructor(public section: string) {}

	parseCodeAndName() {
		const match = this.section.match(/^MCC (?<code>\d{4}): (?<name>.+)\n/)
		return match?.groups ? { code: match.groups.code, name: match.groups.name } : undefined
	}

	parseTccDescCategory() {
		const match = this.section.match(
			/\nTCC (?<tcc>(.|\n)+)\nMCC Description (?<description>(.|\n)+)\nMCC Category (?<category>(.|\n)+)\nAB Programs/
		)
		return match?.groups
			? { tcc: match.groups.tcc, description: match.groups.description, category: match.groups.category }
			: undefined
	}

	parseAbPrograms() {
		const match = this.section.match(
			/AB Programs Global: (?<global>(.|,| |\n)+)\nCountry-specific: (?<country>(.|,| |\n)+)$/ //
		)
		return match?.groups
			? {
					global: match.groups.global.replaceAll("\n", "").replaceAll(" ", "").split(","),
					countrySpecific: match.groups.country.replaceAll("\n", "").replaceAll(" ", "").split(","),
			  }
			: undefined
	}

	parse(): Partial<Mcc> {
		const abPrograms = this.parseAbPrograms()
		return { ...this.parseCodeAndName(), ...this.parseTccDescCategory(), abPrograms }
	}
}
