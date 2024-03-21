import { isly } from "isly"
import { Base } from "./Base"

export interface Single extends Base {
	code: string // 4 digit code
	abPrograms: {
		global?: string[]
		countrySpecific?: string[]
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
	export function match(category: Single, code: string): Single | undefined {
		return category.code == code ? category : undefined
	}
}
