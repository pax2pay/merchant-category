import { isly } from "isly"
import { categories } from "./categories"
import { Code as CategoryCode } from "./Code"
import { Range as CategoryRange } from "./Range"
import { Single as CategorySingle } from "./Single"

export type Category = Category.Single | Category.Range

export namespace Category {
	export const type: isly.Type<Category> = isly.named(
		"merchant.Category",
		isly.union(CategorySingle.type, CategoryRange.type)
	)
	export const is = type.is
	export const flaw = type.flaw

	export type Code = CategoryCode
	export const Code = CategoryCode
	export type Single = CategorySingle
	export const Single = CategorySingle
	export type Range = CategoryRange
	export const Range = CategoryRange

	export const all = categories as readonly Readonly<Category>[]

	export function extract(category: Category, code: string): Category.Single | undefined {
		return Category.Range.is(category) ? Range.extract(category, code) : category.code == code ? category : undefined
	}
	export function load(code: string): Category.Single | undefined {
		let result: Category.Single | undefined
		all.find(category => (result = Category.extract(category, code)))
		return result
	}
	export function logIssues(category: Single | Range) {
		if (Category.Single.is(category))
			Code.is(category.code) || console.error(`code ${category.code} is not valid mcc on ${category.name}`)
		else {
			Code.is(category.code.from) ||
				console.error(`code.from ${category.code.from} is not valid mcc on ${category.name}`)
			Code.is(category.code.to) || console.error(`code.to ${category.code.to} is not valid mcc on ${category.name}`)
			Object.entries(category.abPrograms.global?.mcc ?? {}).forEach(
				([program, codes]) =>
					codes == "all" ||
					codes.forEach(
						code =>
							Code.is(code) ||
							console.error(`countrySpecific.mcc["${program}"] ${code} is not valid mcc on ${category.name}`)
					)
			)
			Object.entries(category.abPrograms.countrySpecific?.mcc ?? {}).forEach(
				([program, codes]) =>
					codes == "all" ||
					codes.forEach(
						code =>
							Code.is(code) ||
							console.error(`countrySpecific.mcc["${program}"] ${code} is not valid mcc on ${category.name}`)
					)
			)
		}
	}
}
