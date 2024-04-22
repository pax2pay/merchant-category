import { merchant } from "../index"

describe("Program", () => {
	it("load codes", () =>
		expect(
			["A001", "B001", "GW01", "H001", "R001", "V001"]
				.flatMap(p =>
					merchant.Program.load(p)?.categories.map(c =>
						typeof c.code == "string" ? c.code : `${c.code.from}-${c.code.to}`
					)
				)
				.sort()
				.join(", ")
		).toEqual(
			"3000-3350, 3351-3500, 3501-3999, 4112, 4131, 4411, 4511, 4582, 4722, 5962, 6513, 7011, 7012, 7032, 7033, 7298, 7512, 7513, 7519, 7991, 7997, 7999"
		))
	it("load string", () =>
		expect(
			["A001", "B001", "GW01", "H001", "R001", "V001"]
				.flatMap(p =>
					merchant.Program.load(p)?.categories.map(
						c => p + "  " + (typeof c.code == "string" ? c.code : `${c.code.from}-${c.code.to}`) + "  " + c.name
					)
				)
				.sort()
				.join("\n")
		).toMatchInlineSnapshot(`
"A001  3000-3350  Airlines, Air Carriers
A001  4511  Air Carriers, Airlines: Not Elsewhere Classified
B001  4411  Cruise Lines
GW01  4131  Bus Lines
GW01  4582  Airports, Airport Terminals, Flying Fields
GW01  4722  Travel Agencies and Tour Operators
GW01  5962  Direct Marketing: Travel-Related Arrangement Services
GW01  6513  Real Estate Agents and Managers: Rentals
GW01  7012  Timeshares
GW01  7032  Recreational and Sporting Camps
GW01  7033  Campgrounds and Trailer Parks
GW01  7298  Health and Beauty Spas
GW01  7991  Tourist Attractions and Exhibits
GW01  7997  Clubs: Country Clubs, Membership (Athletic, Recreation, Sports), Private Golf
GW01  7999  Recreation Services: not elsewhere classified
H001  3501-3999  Lodging: Hotels, Motels, Resorts
H001  7011  Lodging: Hotels, Motels, Resorts: not elsewhere classified
R001  4112  Passenger Railways
V001  3351-3500  Car Rental Agencies
V001  7512  Automobile Rental Agency: not elsewhere classified
V001  7513  Truck Rental
V001  7519  Motor Home and Recreational Vehicle Rental"
`))
})
