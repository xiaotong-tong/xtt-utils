const { str2Num } = require("xtt-utils/string/str2num");

describe("str2Num module", () => {
	test("success", () => {
		expect(str2Num("123")).toBe(123);
		expect(str2Num("")).toBe(NaN);
		expect(str2Num("123.456")).toBe(123.456);
		expect(str2Num("123.456.789")).toBe(123.456789);
		expect(str2Num("fdsf12fd3.4fsdf56.7fds89")).toBe(123.456789);
		expect(str2Num("-fdsf12fd3.4fsdf56.7fds89")).toBe(-123.456789);
		expect(str2Num("Infinity123-Infinity")).toBe(123);
	});
	test("warning", () => {
		expect(str2Num()).toBe(NaN);
		expect(str2Num(123)).toBe(123);
		expect(str2Num(3e5)).toBe(3e5);
		expect(str2Num(Infinity)).toBe(Infinity);
		expect(str2Num(NaN)).toBe(NaN);
		expect(str2Num(0x10)).toBe(0x10);
	});
});
