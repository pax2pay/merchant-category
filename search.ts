import { Mcc } from "./Mcc"

export function search(mccArray: Mcc[], mccCode: string): Mcc | { error: string; code: string } {
	for (const mcc of mccArray) {
		const match = Mcc.match(mcc, mccCode)
		if (match)
			return match
	}
	return { error: "Not found", code: mccCode }
}
