/**
 * 函数柯里化
 * @param {Function} fn 要柯里化的函数
 * @param  {...any} [args] 初始化的参数
 * @returns {Function | any} 柯里化后的函数,如果参数已经足够,则返回函数执行结果
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

curry.placeholder = Symbol("placeholder");

export { curry };
