/**
 * 开启链式调用，必须调用 value 方法获取最终的值
 * @param {object} [self=this] 调用链式调用的对象,默认为 this
 * @param {*} [initValue] 初始值, 在下一次调用链式调用的方法时会作为第一个参数传入
 *
 * 如果仅传入一个参数, 且该参数不是对象, 则该参数会作为 initValue 值，如果传入的是对象，则该对象会作为 self 值
 * @returns {Proxy} 代理对象
 * @example
 * chain(xttUtils, "Hello World!").reverse().reverse().getTermRight(" ").endsWith("World").value() // true
 */

export function chain(self, initValue) {
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
			}
			return proxyed;
		}
	});

	return proxyed;
}
