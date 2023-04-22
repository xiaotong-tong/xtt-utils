const { compose } = require("xtt-utils/fn/compose");
const xttUtils = require("xtt-utils");

const _ = xttUtils.curry.placeholder;
const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);

describe("chain module", () => {
	test("success", () => {
		expect(compose(isEndsWith, getTermRight)("Hello World!")).toBe(true);
		expect(
			compose(
				isEndsWith,
				getTermRight,
				xttUtils.reverse,
				xttUtils.reverse
			)("Hello World!")
		).toBe(true);
	});
});
