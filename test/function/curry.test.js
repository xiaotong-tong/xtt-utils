const { curry } = require("xtt-utils/fn/curry");

describe("curry module", () => {
	test("success", () => {
		const add = (a, b, c) => a + b + c;
		const curriedAdd = curry(add);
		const _ = curry.placeholder;

		expect(curriedAdd(1, 2, 3)).toBe(6);
		expect(curriedAdd(1)(2, 3)).toBe(6);
		expect(curriedAdd(1, 2)(3)).toBe(6);
		expect(curriedAdd(1)(2)(3)).toBe(6);
		expect(curriedAdd(_, 2)(1)(3)).toBe(6);
		expect(curriedAdd(_, 2, 3)(1)).toBe(6);
		expect(curriedAdd(_, _, 3)(_, 2)(1)).toBe(6);
		expect(curry(add, 10, 20, 30, 4)).toBe(60);
	});
});
