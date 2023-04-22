/**
 * 组合函数 从右到左依次执行函数组合
 * @param  {...Function} fns 所有要组合的函数必须是单参数函数，最后一个函数可以是多参数函数
 * @returns 组合函数的执行结果
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
