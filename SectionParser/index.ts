import { RangeSectionParser } from "./RangeSectionParser"
import { SingleSectionParser } from "./SingleSectonParser"

export namespace SectionParser {
	export function create(section: string) {
		return section.split("\n")[0].includes("through")
			? new RangeSectionParser(section)
			: new SingleSectionParser(section)
	}
}
