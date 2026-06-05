import { merchant } from "../index"

describe("Category.intersect", () => {
	it("intersects across industry blocks and singles", () =>
		expect(merchant.Category.intersect("3040", "4500")).toEqual([
			{ category: "Airlines", ranges: [{ from: "3000", to: "3350" }] },
			{ category: "Automobile/Vehicle Rentals", ranges: [{ from: "3351", to: "3500" }] },
			{ category: "Hotels and Motels", ranges: [{ from: "3501", to: "3999" }] },
			{ category: "Transportation", ranges: [{ from: "4011", to: "4789" }] },
		]))
	it("treats unassigned codes within a reserved block as the surrounding category", () =>
		expect(merchant.Category.intersect("3309", "3349")).toEqual([
			{ category: "Airlines", ranges: [{ from: "3000", to: "3350" }] },
		]))
	it("returns nothing for ranges without categories", () =>
		expect(merchant.Category.intersect("0100", "0700")).toEqual([]))
	it("intersects a single code", () =>
		expect(merchant.Category.intersect("7295", "7295")).toEqual([
			{ category: "Business Services", ranges: [{ from: "7295", to: "7295" }] },
		]))
	it("finds out-of-block codes of a block category", () =>
		expect(merchant.Category.intersect("7011", "7011")).toEqual([
			{ category: "Hotels and Motels", ranges: [{ from: "7011", to: "7011" }] },
		]))
	it("collects several ranges for a category split by another", () =>
		expect(merchant.Category.intersect("7000", "7300")).toEqual([
			{ category: "Hotels and Motels", ranges: [{ from: "7011", to: "7011" }] },
			{ category: "Service Providers", ranges: [{ from: "7012", to: "7033" }] },
			{
				category: "Personal Service Providers",
				ranges: [
					{ from: "7210", to: "7278" },
					{ from: "7296", to: "7299" },
				],
			},
			{ category: "Business Services", ranges: [{ from: "7295", to: "7295" }] },
		]))
	it("lists every category over the full code space", () =>
		expect(merchant.Category.intersect("0742", "9999").map(intersection => intersection.category))
			.toMatchInlineSnapshot(`
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
