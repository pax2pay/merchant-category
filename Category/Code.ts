import { isly } from "isly"

export type Code = `${number}${number}${number}${number}` | "all"

export namespace Code {
	export const type = isly.union(isly.string<`${number}${number}${number}${number}`>(/^\d{4}$/), isly.string("all"))
	export const is = type.is
	export const flaw = type.flaw
}
