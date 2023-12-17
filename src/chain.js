/**
 * @description Open chainable sequence, you must call the value method to get the final value
 * @description-cn 开启链式调用，必须调用 value 方法获取最终的值
 * @category Function
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

function chain(self, initValue) {
	if (typeof initValue === "undefined" && typeof self !== "object") {
		initValue = self;
		self = undefined;
	}

	if (typeof self === "undefined") {
		self = this;
	}

	let value = initValue;

	const proxyed = new Proxy(self, {
		get: (target, prop) => {
			if (prop === "value") {
				return () => value;
			}
			if (typeof target[prop] === "function") {
				return (...args) => {
					value = target[prop](value, ...args);
					return proxyed;
				};
			} else {
				console.error(new Error(`The ${prop} method is not a function`));
				return () => proxyed;
			}
		}
	});

	return proxyed;
}

export default chain;
