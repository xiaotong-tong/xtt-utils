const { sum } = require("xtt-utils");

describe("sum module", () => {
	test("success", () => {
		expect(sum([1, 2, 3])).toBe(6);
		expect(sum(1, 2, 3)).toBe(6);

		expect(sum([1, 2, 3], [4, 5, 6])).toBe(21);
		expect(sum([1, 2, 3], 4, 5, 6)).toBe(21);
		expect(sum(1, 2, 3, [4, 5, 6])).toBe(21);
		expect(sum(1, 2, 3, 4, 5, 6)).toBe(21);
	});
});
