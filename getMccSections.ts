function findIndexes(array: string[], condition: (element: string) => any) {
	const indexes: number[] = []
	array.forEach((element, index) => {
		condition(element) && indexes.push(index)
	})
	return indexes
}

export function getMccSections(chapter: string): string[] {
	const lines = chapter.split("\n")
	const chapterStartIndices = findIndexes(lines, line => line.match(/^MCC \d{4}: (\w| )+$/g))
	const sections = chapterStartIndices.map((_, i) => {
		return lines
			.slice(chapterStartIndices[i], i < chapterStartIndices.length - 1 ? chapterStartIndices[i + 1] : undefined)
			.join("\n")
	})
	return sections
}
