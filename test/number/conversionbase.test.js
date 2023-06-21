const { conversionBase } = require("xtt-utils");

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

		expect(conversionBase(0b1010, 10)).toBe("10");
		expect(conversionBase(0b1010, 2)).toBe("0b1010");
		expect(conversionBase(0b1010, 8)).toBe("0o12");
		expect(conversionBase(0b1010, 16)).toBe("0xa");

		expect(conversionBase(0o12, 10)).toBe("10");
		expect(conversionBase(0o12, 2)).toBe("0b1010");
		expect(conversionBase(0o12, 8)).toBe("0o12");
		expect(conversionBase(0o12, 16)).toBe("0xa");

		expect(conversionBase(1e2, 10)).toBe("100");
		expect(conversionBase(1e2, 2)).toBe("0b1100100");
		expect(conversionBase(1e2, 8)).toBe("0o144");
		expect(conversionBase(1e2, 16)).toBe("0x64");

		expect(conversionBase(-10, 2)).toBe("-0b1010");
		expect(conversionBase(-10, 8)).toBe("-0o12");
		expect(conversionBase(-10, 16)).toBe("-0xa");

		// 因为浮点数的精度问题，所以小数的结果不是很准确
		expect(conversionBase(10.5, 2)).toBe("0b1010.1");
		expect(conversionBase(10.125, 2)).toBe("0b1010.001");
		expect(conversionBase(10.01, 2)).toBe("0b1010.0000001010001111010111000010100011110101110000101");

		// 最大可表示 53 位的整数
		expect(conversionBase(Infinity, 2)).toBe("0b11111111111111111111111111111111111111111111111111111");
		expect(conversionBase(-Infinity, 2)).toBe("-0b11111111111111111111111111111111111111111111111111111");

		expect(conversionBase(10, 2, false)).toBe("1010");
		expect(conversionBase(10, 8, false)).toBe("12");
		expect(conversionBase(10, 16, false)).toBe("a");
	});

	test("other", () => {
		expect(conversionBase()).toBe("0");

		expect(conversionBase(NaN, 2)).toBe("0b0");
		expect(conversionBase(NaN, 8)).toBe("0o0");
		expect(conversionBase(NaN, 10)).toBe("0");
		expect(conversionBase(NaN, 16)).toBe("0x0");

		expect(conversionBase(undefined, 2)).toBe("0b0");
		expect(conversionBase(undefined, 8)).toBe("0o0");
		expect(conversionBase(undefined, 10)).toBe("0");
		expect(conversionBase(undefined, 16)).toBe("0x0");

		expect(conversionBase(null, 2)).toBe("0b0");
		expect(conversionBase(null, 8)).toBe("0o0");
		expect(conversionBase(null, 10)).toBe("0");
		expect(conversionBase(null, 16)).toBe("0x0");

		expect(conversionBase("abc", 2)).toBe("0b0");
		expect(conversionBase("abc", 8)).toBe("0o0");
		expect(conversionBase("abc", 10)).toBe("0");
		expect(conversionBase("abc", 16)).toBe("0x0");

		expect(conversionBase("10", 2)).toBe("0b1010");
		expect(conversionBase("10", 8)).toBe("0o12");
		expect(conversionBase("10", 10)).toBe("10");
		expect(conversionBase("10", 16)).toBe("0xa");

		expect(conversionBase("0xa", 2)).toBe("0b1010");
		expect(conversionBase("0xa", 8)).toBe("0o12");
		expect(conversionBase("0xa", 10)).toBe("10");
		expect(conversionBase("0xa", 16)).toBe("0xa");

		expect(conversionBase("0b1010", 2)).toBe("0b1010");
		expect(conversionBase("0b1010", 8)).toBe("0o12");
		expect(conversionBase("0b1010", 10)).toBe("10");
		expect(conversionBase("0b1010", 16)).toBe("0xa");

		expect(conversionBase("0o12", 2)).toBe("0b1010");
		expect(conversionBase("0o12", 8)).toBe("0o12");
		expect(conversionBase("0o12", 10)).toBe("10");
		expect(conversionBase("0o12", 16)).toBe("0xa");

		expect(conversionBase("1e2", 10)).toBe("100");
		expect(conversionBase("1e2", 2)).toBe("0b1100100");
		expect(conversionBase("1e2", 8)).toBe("0o144");
		expect(conversionBase("1e2", 16)).toBe("0x64");

		expect(conversionBase("1e+2", 2)).toBe("0b1100100");
		expect(conversionBase("1e+2", 8)).toBe("0o144");
		expect(conversionBase("1e+2", 10)).toBe("100");
		expect(conversionBase("1e+2", 16)).toBe("0x64");
	});
});
