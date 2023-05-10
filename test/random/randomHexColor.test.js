const { randomHexColor } = require("xtt-utils/random/randomHexColor");

expect.extend({
	toBeHexColor: (actual) => {
		const pass = /^#[0-9a-fA-F]{6}$/.test(actual);
		if (pass) {
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
	});
});
