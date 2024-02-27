export { Mcc, MccRange } from "../Mcc"
import { Mcc, MccRange } from "../Mcc"
import { SectionParser } from "./SectionParser"
export { SectionParser } from "./SectionParser"
import { getChapter } from "./getChapter"
export { getChapter } from "./getChapter"
import { splitBySections } from "./splitBySections"
export { splitBySections } from "./splitBySections"

export function getMcc(from?: number | undefined, to?: number | undefined): (Partial<Mcc> | Partial<MccRange>)[] {
	const chapter = getChapter()
	const sections = splitBySections(chapter)
	const mccArray = sections.slice(from, to).map((s, index, arr) => {
		console.log(`started parsing ${index} out of ${arr.length}`)
		console.log(s)
		return SectionParser.create(s).parse()
	})
	return mccArray
}
