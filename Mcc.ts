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
