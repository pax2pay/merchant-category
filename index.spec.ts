import "jest"
import { getMcc } from "./index"

describe("library", () => {
	it("get all mcc", () => {
		// const index = 2
		const mccs = getMcc(14, 15)
		console.log(mccs.length)
		console.log(JSON.stringify(mccs, null, 2))
	})
})
