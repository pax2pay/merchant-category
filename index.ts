export { Mcc } from "./Mcc"
import { Mcc, MccRange } from "./Mcc"
import { SectionParser } from "./SectionParser"
export { SectionParser } from "./SectionParser"
import { BusinessMccCodeChapter } from "./BusinessMccCodeChapter"
export { BusinessMccCodeChapter } from "./BusinessMccCodeChapter"
import { getMccSections } from "./getMccSections"
export { getMccSections } from "./getMccSections"

export function getMcc(from: number, to: number): (Partial<Mcc> | Partial<MccRange>)[] {
	const chapter = new BusinessMccCodeChapter().get()
	const sections = getMccSections(chapter)
	const mccArray = sections.slice(from, to).map((s, index) => {
		console.log(`started parsing ${index} out of ${to - from}`)
		console.log(s)
		return SectionParser.create(s).parse()
	})
	return mccArray
}
