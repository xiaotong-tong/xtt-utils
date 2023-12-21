/**
 * @description Open chainable sequence, you must call the value method to get the final value
 * @description-cn 开启链式调用，必须调用 value 方法获取最终的值
 * @param {object} [self=this] The object of the chainable sequence, default is this
 * @param {*} [initValue] The initial value of the chainable sequence
 *
 * If only one parameter is passed in and the parameter is not an object, the parameter will be used as the initValue value.
 * If the passed-in is an object, the object will be used as the self value
 *
 * @returns {Proxy} Returns a proxy object
 * @example
 * chain(xttUtils, "Hello World!").reverse().reverse().getTermRight(" ").endsWith("World").value() // true
 */
declare function chain<T>(self?: T, initValue?: any): T;

declare module "xtt-utils" {
	export { chain };
}

declare module "xtt-utils/chain" {
	export { chain as default };
}

export { chain, chain as default };
