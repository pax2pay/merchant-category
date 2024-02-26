function findIndexes(array: string[], condition: (element: string) => any) {
	const indexes: number[] = []
	array.forEach((element, index) => {
		condition(element) && indexes.push(index)
	})
	return indexes
}

export function groupLinesByCondition(
	source: string,
	condition: (line: string) => any,
	options: { includeFirst: boolean }
): string[] {
	const lines = source.split("\n")
	const startIndices = findIndexes(lines, condition)
	if (options.includeFirst && startIndices[0] != 0) {
		startIndices.unshift(0)
	}
	const sections = startIndices.map((_, i) => {
		return lines.slice(startIndices[i], i < startIndices.length - 1 ? startIndices[i + 1] : undefined).join("\n")
	})
	return sections
}
