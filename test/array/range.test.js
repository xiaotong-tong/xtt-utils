const { range } = require("xtt-utils");

describe("range module", () => {
	test("success", () => {
		expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(range(-10)).toEqual([0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]);
		expect(range(1, 10, 7)).toEqual([1, 8]);
		expect(range(1, -10, -3)).toEqual([1, -2, -5, -8]);
		expect(range(1, 10, 0)).toEqual([]);
		expect(range(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
		expect(range(1, 1)).toEqual([1]);

		expect(range()).toEqual([0]);
	});
});
