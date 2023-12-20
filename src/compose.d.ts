type LastParamType<T extends any[]> = T extends [...args: infer Params, last: infer Last] ? Last : never;

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
declare function compose<T extends ((arg: any) => any)[]>(
	...fns: T
): (...args: Parameters<LastParamType<T>>) => ReturnType<T[0]>;

declare module "xtt-utils" {
	export { compose };
}

declare module "xtt-utils/compose" {
	export { compose as default };
}

export { compose, compose as default };
