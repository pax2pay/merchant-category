export function groupLinesByCondition(
	source: string,
	condition: (line: string) => any,
	options: { includeFirst: boolean }
): string[] {
	const lines = source.split("\n")
	const result = lines
		.map((element: string, index: number) => [element, index] as const)
		.filter(([element, _]) => condition(element))
		.map(([_, index]) => index)
	if (options.includeFirst && result[0] != 0)
		result.unshift(0)
	return result.map((_, i) => lines.slice(result[i], i < result.length - 1 ? result[i + 1] : undefined).join("\n"))
}
