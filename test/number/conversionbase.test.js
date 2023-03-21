const { conversionBase } = require("xtt-utils/number/conversionBase");

describe("conversionBase module", () => {
	test("success", () => {
		expect(conversionBase(10, 2)).toBe("0b1010");
		expect(conversionBase(10, 8)).toBe("0o12");
		expect(conversionBase(10, 16)).toBe("0xa");
		expect(conversionBase(0xa, 10)).toBe("10");
		expect(conversionBase(0xa)).toBe("10");
		expect(conversionBase(0xa, 2)).toBe("0b1010");
		expect(conversionBase(0xa, 8)).toBe("0o12");
		expect(conversionBase(0xa, 16)).toBe("0xa");
	});
});
