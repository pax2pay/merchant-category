import { Category } from "./Category"
import { parse } from "./parse"
import { search } from "./search"

describe("search", () => {
	it("single", () => {
		const categories = parse() as Category[]
		expect(search(categories, "7513")).toEqual({
			code: "7513",
			name: "Truck Rental",
			tcc: "A",
			description: `Merchants that provide short-term rental or long-term leasing of
trucks, vans, or utility trailers. Such vehicles are used for moving or
hauling, and are rented on a do-it-yourself basis.`,
			category: "Automobile/Vehicle Rentals",
			abPrograms: {
				global: ["TE01", "TE02", "TE03", "TE04", "V001"],
				countrySpecific: ["BEL1", "BR07", "BR10", "CHLG", "CHNA", "COLN", "SPN3", "TT01-TTO"],
			},
		})
	})
	it("range", () => {
		const categories = parse() as Category[]
		expect(search(categories, "3003")).toEqual({
			code: "3003",
			name: "Airlines, Air Carriers",
			tcc: "X",
			description: `For a complete listing of major airline merchants, refer to the
Acceptor Business Code (MCC): Alphabetic section, or Acceptor
Business Code (MCC): Transaction Category Codes section.`,
			category: "Airlines",
			abPrograms: {
				global: ["A001", "CF01", "TE01", "TE02", "TE03", "TE04"],
				countrySpecific: ["BEL1", "CHLL", "TT01-TTO"],
			},
		})
		expect(search(categories, "3386")).toEqual({
			code: "3386",
			name: "Car Rental Agencies",
			tcc: "A",
			description: `For a complete listing of major car rental agency merchants, refer to
the Acceptor Business Code (MCC): Alphabetic section, or Acceptor
Business Code (MCC): Transaction Category Codes section.`,
			category: "Automobile/Vehicle Rentals",
			abPrograms: {
				global: ["TE01", "TE02", "TE03", "TE04", "V001"],
				countrySpecific: ["BEL1", "BR07", "BR10", "CHLG", "COLN", "SPN3", "TT01-TTO"],
			},
		})
	})
})
