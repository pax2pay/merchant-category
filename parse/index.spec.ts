import "jest"
import { parse } from "./index"

describe("library", () => {
	it("get all mcc", () => {
		const categories = parse()
		console.log(JSON.stringify(categories, null, 2))
		console.log(categories.length)
	})
})
