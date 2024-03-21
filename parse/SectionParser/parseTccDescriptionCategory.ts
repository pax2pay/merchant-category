import { Category } from "../../Category"

export function parseTccDescriptionCategory(
	section: string
): Partial<Pick<Category.Single, "tcc" | "description" | "category">> {
	const tccMatch = section.match(/\nTCC (?<tcc>(.|\n)+)\nMCC Description/)
	const descMatch = section.match(/MCC Description (?<description>(.|\n)+)\nMCC Category/)
	const categoryMatch = section.match(/MCC Category (?<category>(.|\n)+)\nAB Programs/)
	return {
		tcc: tccMatch?.groups?.tcc,
		description: descMatch?.groups?.description,
		category: categoryMatch?.groups?.category,
	}
}
