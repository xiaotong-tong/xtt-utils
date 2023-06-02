const { strToNum } = require("xtt-utils");

describe("strToNum module", () => {
	test("success", () => {
		expect(strToNum("123")).toBe(123);
		expect(strToNum("")).toBe(NaN);
		expect(strToNum("123.456")).toBe(123.456);
		expect(strToNum("123.456.789")).toBe(123.456789);
		expect(strToNum("fdsf12fd3.4fsdf56.7fds89")).toBe(123.456789);
		expect(strToNum("-fdsf12fd3.4fsdf56.7fds89")).toBe(-123.456789);
		expect(strToNum("Infinity123-Infinity")).toBe(123);
	});
	test("warning", () => {
		expect(strToNum()).toBe(NaN);
		expect(strToNum(123)).toBe(123);
		expect(strToNum(3e5)).toBe(3e5);
		expect(strToNum(Infinity)).toBe(Infinity);
		expect(strToNum(NaN)).toBe(NaN);
		expect(strToNum(0x10)).toBe(0x10);
	});
});
