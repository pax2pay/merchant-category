import { groupLinesByCondition } from "./utilities"

export function splitBySections(chapter: string) {
	return groupLinesByCondition(
		chapter,
		line => line.match(/^MCC \d{4}: [^\n]+$/g) || line.match(/MCCs \d{4} through \d{4}: [^\n]+/g),
		{ includeFirst: false }
	)
}
