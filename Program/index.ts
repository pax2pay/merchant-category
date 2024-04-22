import { isly } from "isly"
import { Category } from "../Category"

export interface Program {
	name: string
	categories: Category[]
}

export namespace Program {
	export const type = isly.object({ name: isly.string(), categories: Category.Code.type.array() }, "merchant.Program")
	export const is = type.is
	export const flaw = type.flaw
	export function load(name: string): Program | undefined {
		const categories: Category[] = Category.all.flatMap(c =>
			Category.Single.is(c) ? Category.Single.belongs(c, name) : Category.Range.belongs(c, name)
		)
		return categories.length > 0 ? { name, categories } : undefined
	}
}
