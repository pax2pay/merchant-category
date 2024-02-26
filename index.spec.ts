import "jest"
import { getMcc } from "./index"

describe("library", () => {
	it("get all mcc", () => {
		const index = 0
		const mccs = getMcc(index, index + 1)
		console.log(mccs.length)
		console.log(JSON.stringify(mccs, null, 2))
	})
})
