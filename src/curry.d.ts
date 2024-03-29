type Curry<P extends any[], R> = P extends [infer F, ...infer O]
	? F extends any
		? (arg: F) => Curry<O, R>
		: never
	: R;

/**
 * @description Currying function
 * @description-cn 函数柯里化
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
 * curriedAdd(1, 2)(3); // 6
 * curriedAdd(1)(2)(3); // 6
 * curriedAdd(_, 2)(1)(3); // 6
 * curriedAdd(_, _, 3)(_, 2)(1); // 6
 * curry(add, 10, 20, 30, 4); // 60
 */
declare const curry: {
	<P extends any[], R>(fn: (...args: P) => R, ...args: P): Curry<P, R>;
	placeholder: symbol;
};

declare module "xtt-utils" {
	export { curry };
}

declare module "xtt-utils/curry" {
	export { curry as default };
}

export { curry, curry as default };
