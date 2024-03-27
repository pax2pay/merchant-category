import { isly } from "isly"
import { Base } from "./Base"
import { Single } from "./Single"

export interface Range extends Base {
	readonly code: { readonly from: string; readonly to: string } // from through to (e.g. MCCs 3000 through 3350)
	readonly abPrograms: Readonly<
		Partial<
			Record<
				"global" | "countrySpecific",
				{ mcc: { readonly [program: string]: readonly string[] | "all" }; readonly exception?: string }
			>
		>
	>
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
	export function extract(category: Range, code: string): Single | undefined {
		return category.code.from <= code && code <= category.code.to
			? {
					code,
					name: category.name,
					tcc: category.tcc,
					description: category.description,
					category: category.category,
					abPrograms: {
						global: Object.entries(category.abPrograms.global?.mcc ?? {})
							.filter(([_, categories]) => categories == "all" || categories.includes(code))
							.map(([program, _]) => program),
						countrySpecific: Object.entries(category.abPrograms.countrySpecific?.mcc ?? {})
							.filter(([_, categories]) => categories == "all" || categories.includes(code))
							.map(([program, _]) => program),
					},
			  }
			: undefined
	}
	export function getAllPrograms(category: Range): { [program: string]: readonly string[] | "all" } {
		return { ...(category.abPrograms.global?.mcc ?? {}), ...(category.abPrograms.countrySpecific?.mcc ?? {}) }
	}
	export function belongs(category: Range, program: string): (Range | Single)[] {
		return Object.entries(getAllPrograms(category))
			.filter(([p, _]) => program == p)
			.map(([_, codes]) =>
				codes == "all" ? [category] : codes.map(code => extract(category, code)).filter((c): c is Single => !!c)
			)
			.flat(1)
	}
}
