import { Range } from "./Range"
import { Single } from "./Single"

export type SectionParser = Single | Range

export namespace SectionParser {
	export function create(section: string) {
		return !section.split("\n")[0].includes("through") ? new Single(section) : new Range(section)
	}
}
