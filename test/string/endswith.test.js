const { endsWith } = require("xtt-utils");

describe("endsWith module", () => {
	test("success", () => {
		expect(endsWith("Hello World!", "World!")).toBe(true);
		expect(endsWith("Hello World!", "World")).toBe(false);
		expect(endsWith("Hello World!", "Hello World!")).toBe(true);
		expect(endsWith("Hello World!", " Hello World!")).toBe(false);
		expect(endsWith("Hello World!", "Hello", 5)).toBe(true);
		expect(endsWith("Hello World!", "Hello", 4)).toBe(false);

		expect(endsWith("Hello World!", /World!/)).toBe(true);
		expect(endsWith("Hello World!", /World/)).toBe(false);
		expect(endsWith("Hello World!", /Hello/, 5)).toBe(true);
		expect(endsWith("Hello World!", /ld!$/i)).toBe(true);
		expect(endsWith("Hello World!", /ld$/i, 11)).toBe(true);
		expect(endsWith("Hello World!", /l/i, 10)).toBe(true);
		expect(endsWith("Hello World!", /l/i, 9)).toBe(false);
	});
});
