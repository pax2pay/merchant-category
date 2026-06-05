import { isly } from "isly"
import { categories } from "./categories"
import { Code as CategoryCode } from "./Code"
import { Single as CategorySingle } from "./Single"

export type Category = Category.Single

export namespace Category {
	export const type: isly.Type<Category> = isly.named("merchant.Category", CategorySingle.type)
	export const is = type.is
	export const flaw = type.flaw

	export type Code = CategoryCode
	export const Code = CategoryCode
	export type Single = CategorySingle
	export const Single = CategorySingle

	export const all = categories as readonly Readonly<Category>[]

	export function load(code: string): Category.Single | undefined {
		return all.find(category => category.code == code)
	}
	export function logIssues(category: Single) {
		Code.is(category.code) || console.error(`code ${category.code} is not valid mcc on ${category.name}`)
	}
}
