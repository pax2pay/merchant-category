import { isly } from "isly"

export interface Base {
	name: string
	tcc: string
	description: string
	category: string
}

export namespace Base {
	export const type = isly.object<Base>(
		{ name: isly.string(), tcc: isly.string(), description: isly.string(), category: isly.string() },
		"Category.Base"
	)
	export const is = type.is
	export const flaw = type.flaw
}
