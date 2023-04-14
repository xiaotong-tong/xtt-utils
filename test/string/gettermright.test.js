const { getTermRight } = require("xtt-utils/string/getTermRight");

describe("getTermRight module", () => {
	test("success", () => {
		expect(getTermRight("abcde", "c")).toBe("de");
		expect(getTermRight("abcde", "c", 2)).toBe("de");
		expect(getTermRight("abcdec", "c", 2)).toBe("");
		expect(getTermRight("abcde", "e")).toBe("");
		expect(getTermRight("abcde", "e", 2)).toBe("");
		expect(getTermRight("abcede", "e", 1)).toBe("de");

		expect(getTermRight("abc1de2", /\d/)).toBe("de2");
		expect(getTermRight("abc1de2", /\d/, 2)).toBe("");
		expect(getTermRight("abc1de2", /\d/, 3)).toBe("");
		expect(getTermRight("0abc1de2", /\d/)).toBe("abc1de2");
		expect(getTermRight("0abc1de2", /\d/, 2)).toBe("de2");
	});
});
