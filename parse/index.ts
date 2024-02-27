import { Mcc } from "../Mcc"
export { Mcc } from "../Mcc"
import { SectionParser } from "./SectionParser"
export { SectionParser } from "./SectionParser"
import { getChapter } from "./getChapter"
export { getChapter } from "./getChapter"
import { splitBySections } from "./splitBySections"
export { splitBySections } from "./splitBySections"

export function getMcc(
	from?: number | undefined,
	to?: number | undefined
): (Partial<Mcc.Single> | Partial<Mcc.Range>)[] {
	const chapter = getChapter()
	const sections = splitBySections(chapter)
	const mccArray = sections.slice(from, to).map(s => {
		return SectionParser.create(s).parse()
	})
	mccArray.forEach(Mcc.logIssues)
	return mccArray
}
