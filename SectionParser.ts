import { Mcc } from "./Mcc"

export class SectionParser {
	constructor(public section: string) {}

	parseCodeAndName() {
		const match = this.section.match(/^MCC (?<code>\d{4}): (?<name>.+)\n/)
		return match?.groups ? { code: match.groups.code, name: match.groups.name } : undefined
	}

	parseTccDescCategory() {
		const tccMatch = this.section.match(/\nTCC (?<tcc>(.|\n)+)\nMCC Description/)
		const descMatch = this.section.match(/MCC Description (?<description>(.|\n)+)\nMCC Category/)
		const categoryMatch = this.section.match(/MCC Category (?<category>(.|\n)+)\nAB Programs/)
		return {
			tcc: tccMatch?.groups?.tcc,
			description: descMatch?.groups?.description,
			category: categoryMatch?.groups?.category,
		}
	}

	parseAbPrograms() {
		const matchGlobal = this.section.match(/AB Programs Global: (?<global>(\w+,? ?\n?)+)(\nCountry|$)/)
		const matchCountry = this.section.match(/\nCountry-specific: (?<country>(\w+,?( |\n)?)+)$/)
		return {
			global: matchGlobal?.groups?.global.replaceAll("\n", "").replaceAll(" ", "").split(","),
			countrySpecific: matchCountry?.groups?.country.replaceAll("\n", "").replaceAll(" ", "").split(","),
		}
	}

	parse(): Partial<Mcc> {
		const abPrograms = this.parseAbPrograms()
		return { ...this.parseCodeAndName(), ...this.parseTccDescCategory(), abPrograms }
	}
}
