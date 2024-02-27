export interface Mcc {
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

export interface MccRange {
	code: { from: string; to: string } // from through to (e.g. MCCs 3000 through 3350)
	name: string
	tcc: string
	description: string
	category: string
	// abPrograms: {
	// 	global?: { list: { value: string; forMcc?: string[] }[]; exception?: string }
	// 	countrySpecific?: { list: { values: string; forMcc?: string[] }[]; exception?: string }
	// }
	abPrograms: {
		global?: { mcc: { [program: string]: string[] | "all" }; exception?: string }
		countrySpecific?: { mcc: { [program: string]: string[] | "all" }; exception?: string }
	}
}
