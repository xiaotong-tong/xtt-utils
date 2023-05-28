/**
 * @description Currying function
 * @description-cn 函数柯里化
 * @category Function
 * @param {Function} fn The function to be curried
 * @param  {...any} [args] The arguments of the function to be curried
 * @returns {Function | any} Curried function, if the parameters are enough, return the result of the function execution
 *
 * @property {symbol} placeholder used to indicate that the parameter is not passed in
 *
 * @example
 * const add = (a, b, c) => a + b + c;
 * const curriedAdd = curry(add);
 * const _ = curry.placeholder;
 * curriedAdd(1, 2, 3); // 6
 * curriedAdd(1)(2, 3); // 6
 * curriedAdd(1, 2)(3); // 6
 * curriedAdd(1)(2)(3); // 6
 * curriedAdd(_, 2)(1)(3); // 6
 * curriedAdd(_, 2, 3)(1); // 6
 * curriedAdd(_, _, 3)(_, 2)(1); // 6
 * curry(add, 10, 20, 30, 4); // 60
 */

const curry = (fn, ...args) => {
	if (
		args.filter((arg) => arg === curry.placeholder).length === 0 &&
		args.length >= fn.length
	) {
		return fn(...args);
	}
	return (...nextArgs) => {
		const allArgs = args.map((arg) =>
			arg === curry.placeholder
				? nextArgs.shift() ?? curry.placeholder
				: arg
		);
		return curry(fn, ...allArgs, ...nextArgs);
	};
};

/**
 * Placeholder for curry function
 * @type {Symbol}
 */
curry.placeholder = Symbol("placeholder");

export { curry };
