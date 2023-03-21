const { charToCodePoint } = require("xtt-utils/string/charToCodePoint");

describe("charToCodePoint module", () => {
	test("success", () => {
		expect(charToCodePoint("Hello World!")).toBe(
			"0x480x650x6c0x6c0x6f0x200x570x6f0x720x6c0x640x21"
		);
		expect(charToCodePoint("")).toBe("");
	});
});
