const { chain } = require("xtt-utils/fn/chain");
const xttUtils = require("xtt-utils");

describe("chain module", () => {
	test("success", () => {
		expect(
			xttUtils
				.chain("Hello World!")
				.getTermRight(" ")
				.endsWith("World!")
				.value()
		).toBe(true);
		expect(
			xttUtils
				.chain("Hello World!")
				.reverse()
				.reverse()
				.getTermRight(" ")
				.endsWith("World!")
				.value()
		).toBe(true);

		expect(
			chain(xttUtils, "Hello World!")
				.getTermRight(" ")
				.endsWith("World!")
				.value()
		).toBe(true);
		expect(
			chain(xttUtils, "Hello World!")
				.reverse()
				.reverse()
				.getTermRight(" ")
				.endsWith("World!")
				.value()
		).toBe(true);
	});
});
