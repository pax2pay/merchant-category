export { Mcc } from "./Mcc"
import { Mcc } from "./Mcc"
import { SectionParser } from "./SectionParser"
export { SectionParser } from "./SectionParser"
import { BusinessMccCodeChapter } from "./BusinessMccCodeChapter"
export { BusinessMccCodeChapter } from "./BusinessMccCodeChapter"
import { getMccSections } from "./getMccSections"
export { getMccSections } from "./getMccSections"

export function getMcc(from: number, to: number): Partial<Mcc>[] {
	const chapter = new BusinessMccCodeChapter().get()
	const sections = getMccSections(chapter)
	const mccs = sections.slice(from, to).map((s, index) => {
		console.log(`started parsing ${index} out of ${to - from}`)
		console.log(s)
		return new SectionParser(s).parse()
	})
	return mccs
}
