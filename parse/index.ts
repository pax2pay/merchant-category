export { Category } from "../Category"
import { Category } from "../Category"
import { getChapter } from "./getChapter"
import { SectionParser } from "./SectionParser"
import { splitBySections } from "./splitBySections"

export function parse(from?: number | undefined, to?: number | undefined): Category[] {
	const result = splitBySections(getChapter())
		.slice(from, to)
		.map(s => SectionParser.create(s).parse())
		.filter(Category.is)
	result.forEach(Category.logIssues)
	return result
}
