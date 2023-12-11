const { isEmail } = require("xtt-utils");

describe("isEmail module", () => {
	test("success", () => {
		expect(isEmail("example@abc.com")).toEqual(true);
		expect(isEmail("abc.com")).toEqual(false);
		expect(isEmail("a.b.example@abc.com")).toEqual(true);
		expect(isEmail("a..example@abc.com")).toEqual(false);

		expect(isEmail("a@b.c")).toEqual(false);
		expect(isEmail("")).toEqual(false);
	});
});
