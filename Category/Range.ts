import { isly } from "isly"
import { Base } from "./Base"
import { Single } from "./Single"

export interface Range extends Base {
	code: { from: string; to: string } // from through to (e.g. MCCs 3000 through 3350)
	abPrograms: {
		global?: { mcc: { [program: string]: string[] | "all" }; exception?: string }
		countrySpecific?: { mcc: { [program: string]: string[] | "all" }; exception?: string }
	}
}
export namespace Range {
	export const type = Base.type.extend<Range>({
		code: isly.object({ from: isly.string(/^\d{4}$/), to: isly.string(/^\d{4}$/) }),
		abPrograms: isly.record(
			isly.string(["global", "countrySpecific"]),
			isly
				.object<{ mcc: { [program: string]: string[] | "all" }; exception?: string }>({
					mcc: isly.record(isly.string(), isly.union(isly.string().array(), isly.string("all"))),
					exception: isly.string().optional(),
				})
				.optional()
		),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function match(mcc: Range, code: string): Single | undefined {
		return mcc.code.from <= code && code <= mcc.code.to
			? {
					code,
					name: mcc.name,
					tcc: mcc.tcc,
					description: mcc.description,
					category: mcc.category,
					abPrograms: {
						global: Object.entries(mcc.abPrograms.global?.mcc ?? {})
							.filter(([_, categories]) => categories == "all" || categories.includes(code))
							.map(([program, _]) => program),
						countrySpecific: Object.entries(mcc.abPrograms.countrySpecific?.mcc ?? {})
							.filter(([_, categories]) => categories == "all" || categories.includes(code))
							.map(([program, _]) => program),
					},
			  }
			: undefined
	}
}
