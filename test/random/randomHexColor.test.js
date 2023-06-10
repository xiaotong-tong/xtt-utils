const { randomHexColor } = require("xtt-utils");

expect.extend({
	toBeHexColor: (actual, alpha) => {
		const grep = new RegExp(`^#[0-9a-fA-F]{${alpha ? 8 : 6}}$`);
		if (grep.test(actual)) {
			return {
				message: () => `expected ${actual} not to be a hex color`,
				pass: true
			};
		} else {
			return {
				message: () => `expected ${actual} to be a hex color`,
				pass: false
			};
		}
	}
});

describe("randomHexColor module", () => {
	test("success", () => {
		expect(randomHexColor()).toBeHexColor();

		expect(randomHexColor({ alpha: true })).toBeHexColor(true);
	});
});
