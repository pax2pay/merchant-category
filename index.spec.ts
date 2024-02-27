import "jest"
import { getMcc } from "./index"

describe("library", () => {
	it("get all mcc", () => {
		// const index = 2
		const mccs = getMcc(22, 23)
		console.log(mccs.length)
		console.log(JSON.stringify(mccs, null, 2))
	})
})
