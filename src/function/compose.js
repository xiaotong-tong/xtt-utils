/**
 * @description Compose function from right to left
 * @description-cn 组合函数 从右到左依次执行函数组合
 * @category Function
 * @param  {...Function} fns All functions to be combined must be single-parameter functions, and the last function can be a multi-parameter function
 * @returns {Function} The function after composition
 * @example
 * const _ = xttUtils.curry.placeholder;
 * const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
 * const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);
 * compose(isEndsWith, getTermRight)("Hello World!") // true
 */

export const compose = (...fns) => {
	return fns.reduceRight((v, fn) => (...args) => {
		return fn(v(...args));
	});
};
