import xttUtils from "../index.js";

export const chain = (self: object, initValue: any): object => {
	let value = initValue;

	const proxyed: object = new Proxy(self, {
		get: function (target: object, prop: keyof object) {
			if (prop === "value") {
				return () => value;
			}
			if (typeof target[prop] === "function") {
				return (...args: any[]) => {
					value = (target[prop] as Function)(value, ...args);
					return proxyed;
				};
			}
			return proxyed;
		}
	});

	return proxyed;
};

console.log(
	chain(xttUtils, "Hello World!")
		// @ts-ignore
		.reverse()
		.reverse()
		.getTermRight(" ")
		.endsWith("World")
		.value()
);
