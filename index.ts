export { Mcc, MccRange } from "./Mcc"
import { Mcc, MccRange } from "./Mcc"
import { SectionParser } from "./SectionParser"
export { SectionParser } from "./SectionParser"
import { Chapter } from "./Chapter"
export { Chapter } from "./Chapter"
import { splitBySections } from "./splitBySections"
export { splitBySections } from "./splitBySections"

export function getMcc(from: number, to: number): (Partial<Mcc> | Partial<MccRange>)[] {
	const chapter = new Chapter().get()
	const sections = splitBySections(chapter)
	const mccArray = sections.slice(from, to).map((s, index) => {
		console.log(`started parsing ${index} out of ${to - from}`)
		console.log(s)
		return SectionParser.create(s).parse()
	})
	return mccArray
}
