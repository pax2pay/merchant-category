import { Category } from "../../Category"
import { parseTccDescriptionCategory as parseTccDescriptionCategory } from "./parseTccDescriptionCategory"

export class Single {
	constructor(readonly section: string) {}
	private parseCodeAndName(): Pick<Category.Single, "code" | "name"> | undefined {
		const match = this.section.match(/^MCC (?<code>\d{4}): (?<name>.+)\n/)
		return match?.groups ? { code: match.groups.code, name: match.groups.name } : undefined
	}
	private parseAbGlobalPrograms() {
		const matchGlobal = this.section.match(/AB Programs Global: (?<global>([\w\-, .\n]+))\nCountry/)
		return matchGlobal?.groups?.global
			.replaceAll("\n", "")
			.replaceAll(" ", "")
			.split(/[,.]/)
			.filter(m => m)
	}
	private parseAbCountryPrograms() {
		const matchCountry = this.section.match(/\nCountry-specific: (?<country>([^$])+)/)
		return matchCountry?.groups?.country
			.replaceAll("\n", "")
			.replaceAll(" ", "")
			.split(/[,.]/)
			.filter(m => m)
	}
	parse(): Category.Single | undefined {
		const codeAndName = this.parseCodeAndName()
		const tccDescriptionCategory = parseTccDescriptionCategory(this.section)
		const global = this.parseAbGlobalPrograms()
		const countrySpecific = this.parseAbCountryPrograms()
		const result = {
			...codeAndName,
			...tccDescriptionCategory,
			abPrograms: {
				global,
				countrySpecific,
			},
		}
		return Category.Single.is(result) ? result : undefined
	}
}
