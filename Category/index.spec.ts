import { merchant } from "../index"

describe("Category.intersect", () => {
	it("intersects across industry blocks and singles", () =>
		expect(merchant.Category.intersect("3040", "4500")).toEqual([
			"Airlines",
			"Automobile/Vehicle Rentals",
			"Hotels and Motels",
			"Transportation",
		]))
	it("treats unassigned codes within a reserved block as the surrounding category", () =>
		expect(merchant.Category.intersect("3309", "3349")).toEqual(["Airlines"]))
	it("returns nothing for ranges without categories", () =>
		expect(merchant.Category.intersect("0100", "0700")).toEqual([]))
	it("intersects a single code", () =>
		expect(merchant.Category.intersect("7295", "7295")).toEqual(["Business Services"]))
	it("finds out-of-block codes of a block category", () =>
		expect(merchant.Category.intersect("7011", "7011")).toEqual(["Hotels and Motels"]))
	it("lists every category over the full code space", () =>
		expect(merchant.Category.intersect("0742", "9999")).toMatchInlineSnapshot(`
[
  "Contracted Services",
  "Wholesale Distributors and Manufacturers",
  "Airlines",
  "Automobile/Vehicle Rentals",
  "Hotels and Motels",
  "Transportation",
  "Utilities",
  "Service Providers",
  "Retail Stores",
  "Automobiles and Vehicles",
  "Clothing Stores",
  "Miscellaneous Stores",
  "Mail Order/Telephone Order Providers",
  "Personal Service Providers",
  "Business Services",
  "Repair Services",
  "Amusement and Entertainment",
  "Professional Services and Membership Organizations",
  "Government Services",
]
`))
})
