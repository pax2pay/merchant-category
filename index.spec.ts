import "jest"
import { getMcc } from "./index"

describe("library", () => {
	it("get all mcc", () => {
		const mccs = getMcc(4, 5)
		console.log(mccs.length)
		console.log(JSON.stringify(mccs, null, 2))
	})
})
