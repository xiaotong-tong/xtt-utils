const { startsWith } = require("xtt-utils");

describe("startsWith module", () => {
	test("success", () => {
		expect(startsWith("Hello World!", "Hello")).toBe(true);
		expect(startsWith("Hello World!", "World")).toBe(false);
		expect(startsWith("Hello World!", "Hello World!")).toBe(true);
		expect(startsWith("Hello World!", "Hello World! ")).toBe(false);
		expect(startsWith("Hello World!", "World", 6)).toBe(true);
		expect(startsWith("Hello World!", "World", 7)).toBe(false);

		expect(startsWith("Hello World!", /Hello/)).toBe(true);
		expect(startsWith("Hello World!", /World/)).toBe(false);
		expect(startsWith("Hello World!", /he/i)).toBe(true);
		expect(startsWith("Hello World!", /he/i, 1)).toBe(false);
		expect(startsWith("Hello World!", /o/, 4)).toBe(true);
		expect(startsWith("Hello World!", /o/, 5)).toBe(false);
	});
});
