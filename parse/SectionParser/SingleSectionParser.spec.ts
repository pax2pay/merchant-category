import { SingleSectionParser } from "./SingleSectionParser"

describe("SingleSectionParser", () => {
	it("", () => {
		const section = `MCC 0780: Horticultural and Landscaping Services
The description of each MCC includes the TCC(s) that are valid for that MCC. Only a valid
combination of MCC and TCC may be used in a transaction.
TCC R for face-to-face transactions.
T for non–face-to-face transactions.
MCC Description Landscape architects and other providers of landscape planning and
design services. Also, merchants that offer a variety of lawn and
garden services such as planting, fertilizing, mowing, mulching,
seeding, spraying, and sod laying.
MCC Category Contracted Services
AB Programs Global: CCR3, CR03, OTH1, OTH2, OTH3,
OTH4, OTH5, OTH6, OT11, OT12,
OT13, OT14, OT15, OT16, OT21,
OT22, OT25, OT32
Country-specific: BR07, BR10, CHLE, CHNA, COLL,
IDN2, JA02, OTH8, OT33, OT34,
OT36, OT39, OT40, OT41, UR10`
		const mcc = new SingleSectionParser(section).parse()
		expect(mcc).toEqual({
			code: "0780",
			name: "Horticultural and Landscaping Services",
			tcc: `R for face-to-face transactions.
T for non–face-to-face transactions.`,
			description: `Landscape architects and other providers of landscape planning and
design services. Also, merchants that offer a variety of lawn and
garden services such as planting, fertilizing, mowing, mulching,
seeding, spraying, and sod laying.`,
			category: `Contracted Services`,
			abPrograms: {
				global: [
					"CCR3",
					"CR03",
					"OTH1",
					"OTH2",
					"OTH3",
					"OTH4",
					"OTH5",
					"OTH6",
					"OT11",
					"OT12",
					"OT13",
					"OT14",
					"OT15",
					"OT16",
					"OT21",
					"OT22",
					"OT25",
					"OT32",
				],
				countrySpecific: [
					"BR07",
					"BR10",
					"CHLE",
					"CHNA",
					"COLL",
					"IDN2",
					"JA02",
					"OTH8",
					"OT33",
					"OT34",
					"OT36",
					"OT39",
					"OT40",
					"OT41",
					"UR10",
				],
			},
		})
	})
})
