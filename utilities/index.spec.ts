import { groupLinesByCondition } from "./index"

describe("utilities", () => {
	it("groupLinesByCondition", () => {
		const sections = [
			`BEL1, BR07, BR10, CHLG, COLN,
SPN3, TT01-TTO`,
			`BEL1 for MCCs 3351, 3352,
3353, 3354, 3355, 3357, 3359,
3360, 3361, 3362, 3364, 3366,
3368, 3370, 3374, 3376, 3380,
3381, 3385, 3386, 3387, 3388,
3389, 3390, 3391, 3393, 3394,
3395, 3396, 3398, 3400, 3405,
3409, 3412, 3420, 3421, 3423,
3425, 3427, 3428, 3429, 3430,
3431, 3432, 3433, 3434, 3435,
3436, 3438, 3439, 3441`,
			`BR10 for MCCs 3352, 3353,
3354, 3355, 3357, 3359, 3360,
3361, 3362, 3364, 3366, 3368,
3370, 3374, 3376, 3380, 3381,
3385, 3386, 3387, 3388, 3389,
3390, 3391, 3393, 3394, 3395,
3396, 3398, 3400, 3405, 3409,
3412, 3420, 3421, 3423, 3425,
3427, 3428, 3429, 3430, 3431,
3432, 3433, 3434, 3435, 3436,
3438, 3439, 3441`,
		]
		const source = sections.join("\n")
		expect(groupLinesByCondition(source, line => line.includes(" for "), { includeFirst: false })).toEqual(
			sections.slice(1)
		)
		expect(groupLinesByCondition(source, line => line.includes(" for "), { includeFirst: true })).toEqual(sections)
	})
})
