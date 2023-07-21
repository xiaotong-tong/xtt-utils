const { reverse } = require("xtt-utils");

describe("revert module", () => {
	test("success", () => {
		expect(reverse("Hello World!")).toBe("!dlroW olleH");
		expect(reverse("Hello \u{1D306} World!")).toBe("!dlroW \u{1D306} olleH");
		expect(reverse("")).toBe("");
	});
	test("warning", () => {
		expect(reverse()).toBe("");
		expect(reverse(123456)).toBe("");
	});
});
