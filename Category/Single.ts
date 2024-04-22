import { isly } from "isly"
import { Base } from "./Base"

export interface Single extends Base {
	readonly code: string // 4 digit code
	readonly abPrograms: {
		readonly global?: readonly string[]
		readonly countrySpecific?: readonly string[]
	}
}

export namespace Single {
	export const type = Base.type.extend<Single>({
		code: isly.string(/^\d{4}$/),
		abPrograms: isly.object({
			global: isly.string().array().optional(),
			countrySpecific: isly.string().array().optional(),
		}),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function belongs(category: Single, program: string): Single[] {
		return category.abPrograms?.global?.some(p => p == program) ||
			category.abPrograms?.countrySpecific?.some(p => p == program)
			? [category]
			: []
	}
}
