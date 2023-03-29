const { thousandth } = require("xtt-utils/number/thousandth");

describe("thousandth module", () => {
	test("success", () => {
		expect(thousandth(1)).toBe("1");
		expect(thousandth(1000)).toBe("1,000");
		expect(thousandth(1000000)).toBe("1,000,000");
		expect(thousandth(1000000000)).toBe("1,000,000,000");
		expect(thousandth(1000000.1111)).toBe("1,000,000.1111");
	});
});
