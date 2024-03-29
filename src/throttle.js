/**
 * @description throttle function
 * @description-cn 节流函数
 * @param { Function } func  The function to be throttled
 * @param { number} delay The delay time
 * @return { Function } Returns the throttled function
 */

const throttle = (func, delay) => {
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
			}, delay ?? 0);
		} else {
			lastArgs = args;
		}
	};

	return res;
};

export {
	throttle,
	throttle as default
}
