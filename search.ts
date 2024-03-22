import { Category } from "./Category"

export function search(
	categories: Category[],
	categoryCode: string
): Category.Single | { error: string; code: string } {
	let result: Category.Single | undefined
	categories.find(category => (result = Category.match(category, categoryCode)))
	return (
		result ?? {
			error: "Not found",
			code: categoryCode,
		}
	)
}
