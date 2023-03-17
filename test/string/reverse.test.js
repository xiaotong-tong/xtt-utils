const { reverse } = require("xtt-utils/string/reverse");

describe("revert module", () => {
	test("success", () => {
		expect(reverse("Hello World!")).toBe("!dlroW olleH");
		expect(reverse("")).toBe("");
	});
	test("warning", () => {
		expect(reverse()).toBe("");
		expect(reverse(123456)).toBe("");
	});
});
