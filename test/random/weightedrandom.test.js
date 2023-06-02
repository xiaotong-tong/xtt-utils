const { weightedRandom } = require("xtt-utils");

expect.extend({
	toBeInclude: (actual, range) => {
		if (range.includes(actual)) {
			return {
				pass: true
			};
		} else {
			return {
				message: () => `expected ${actual} to be in ${range}`,
				pass: false
			};
		}
	}
});

describe("weightedRandom module", () => {
	test("success", () => {
		expect(weightedRandom([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBeInclude([1, 2, 3, 4, 5]);
		expect(weightedRandom({ a: 1, b: 2, c: 3, d: 4, e: 5 })).toBeInclude(["a", "b", "c", "d", "e"]);
	});
});
