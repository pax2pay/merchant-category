export type Mcc = Mcc.Single | Mcc.Range

export namespace Mcc {
	export function match(mcc: Mcc, code: string): Single | undefined {
		if (isSingle(mcc)) {
			return matchSingle(mcc, code)
		} else {
			return matchRange(mcc, code)
		}
	}

	export interface Single {
		code: string // 4 digit code
		name: string
		tcc: string
		description: string
		category: string
		abPrograms: {
			global?: string[]
			countrySpecific?: string[]
		}
	}
	export function isSingle(value: Single | Range): value is Single {
		return typeof value.code == "string"
	}
	export function matchSingle(mcc: Single, code: string): Single | undefined {
		return mcc.code == code ? mcc : undefined
	}

	export interface Range {
		code: { from: string; to: string } // from through to (e.g. MCCs 3000 through 3350)
		name: string
		tcc: string
		description: string
		category: string
		abPrograms: {
			global?: { mcc: { [program: string]: string[] | "all" }; exception?: string }
			countrySpecific?: { mcc: { [program: string]: string[] | "all" }; exception?: string }
		}
	}
	export function isRange(value: Single | Range): value is Range {
		return typeof value.code == "object"
	}
	export function matchRange(mcc: Range, code: string): Single | undefined {
		if (mcc.code.from <= code && code <= mcc.code.to) {
			return {
				code,
				name: mcc.name,
				tcc: mcc.tcc,
				description: mcc.description,
				category: mcc.category,
				abPrograms: {
					global: Object.entries(mcc.abPrograms.global?.mcc ?? {})
						.filter(([_, mccCodes]) => mccCodes == "all" || mccCodes.includes(code))
						.map(([program, _]) => program),
					countrySpecific: Object.entries(mcc.abPrograms.countrySpecific?.mcc ?? {})
						.filter(([_, mccCodes]) => mccCodes == "all" || mccCodes.includes(code))
						.map(([program, _]) => program),
				},
			}
		}
		return undefined
	}

	export function logIssues(mcc: Single | Range) {
		if (isSingle(mcc)) {
			Code.is(mcc.code) || console.error(`code ${mcc.code} is not valid mcc on ${mcc.name}`)
		} else {
			Code.is(mcc.code.from) || console.error(`code.from ${mcc.code.from} is not valid mcc on ${mcc.name}`)
			Code.is(mcc.code.to) || console.error(`code.to ${mcc.code.to} is not valid mcc on ${mcc.name}`)
			Object.entries(mcc.abPrograms.global?.mcc ?? {}).forEach(
				([program, codes]) =>
					codes == "all" ||
					codes.forEach(
						code =>
							Code.is(code) ||
							console.error(`countrySpecific.mcc["${program}"] ${code} is not valid mcc on ${mcc.name}`)
					)
			)
			Object.entries(mcc.abPrograms.countrySpecific?.mcc ?? {}).forEach(
				([program, codes]) =>
					codes == "all" ||
					codes.forEach(
						code =>
							Code.is(code) ||
							console.error(`countrySpecific.mcc["${program}"] ${code} is not valid mcc on ${mcc.name}`)
					)
			)
		}
	}

	export namespace Code {
		export function is(value: any): value is `${number}${number}${number}${number}` {
			return !!(typeof value == "string" && value.match(/^\d{4}$/)) || value == "all"
		}
	}
}
