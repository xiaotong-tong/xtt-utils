/**
 * @description Compose function from right to left
 * @description-cn 组合函数 从右到左依次执行函数组合
 * @param  {...Function} fns All functions to be combined must be single-parameter functions, and the last function can be a multi-parameter function
 * @returns {Function} The function after composition
 * @example
 * const _ = xttUtils.curry.placeholder;
 * const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
 * const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);
 * compose(isEndsWith, getTermRight)("Hello World!") // true
 */
declare function compose(...fns: Function[]): Function;

declare module "xtt-utils" {
	export type { compose };
}

declare module "xtt-utils/compose" {
	export type { compose as default };
}

export default compose;
