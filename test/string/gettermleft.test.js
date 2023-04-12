const { getTermLeft } = require("xtt-utils/string/getTermLeft");

describe("getTermLeft module", () => {
	test("success", () => {
		expect(getTermLeft("abcde", "c")).toBe("ab");
		expect(getTermLeft("abcde", "c", 2)).toBe("ab");
		expect(getTermLeft("abcdec", "c", 2)).toBe("abcde");
		expect(getTermLeft("abcde", "a")).toBe("");
		expect(getTermLeft("abcde", "a", 2)).toBe("");
		expect(getTermLeft("abcade", "a", 2)).toBe("abc");

		expect(getTermLeft("abc1de2", /\d/)).toBe("abc");
		expect(getTermLeft("abc1de2", /\d/, 2)).toBe("abc1de");
		expect(getTermLeft("abc1de2", /\d/, 3)).toBe("abc1de");
		expect(getTermLeft("0abc1de2", /\d/)).toBe("");
		expect(getTermLeft("0abc1de2", /\d/, 2)).toBe("0abc");
	});
});
