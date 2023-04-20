/**
 * 节流函数
 * @param { Function } func  要节流的函数
 * @param { number} delay 延迟时间
 * @return { Function } 节流后的函数
 */

export const throttle = (func, delay) => {
	let lastArgs = null;
	let isWaiting = false;

	const res = (...args) => {
		if (!isWaiting) {
			isWaiting = true;
			func(...args);
			setTimeout(() => {
				isWaiting = false;
				if (lastArgs !== null) {
					const lastArgsCopy = lastArgs;
					lastArgs = null;
					res(...lastArgsCopy);
				}
			}, delay);
		} else {
			lastArgs = args;
		}
	};

	return res;
};
