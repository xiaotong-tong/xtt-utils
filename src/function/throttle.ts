/**
 * @description 节流函数
 * @param { Function } func  要节流的函数
 * @param { number} delay 延迟时间
 * @return { Function } 节流后的函数
 */

export const throttle = (
	func: (...args: any[]) => void,
	delay: number
): ((...args: any[]) => void) => {
	let lastArgs: any[] | null = null;
	let isWaiting = false;

	return (...args: any[]) => {
		if (!isWaiting) {
			isWaiting = true;
			func(...args);
			setTimeout(() => {
				isWaiting = false;
				if (lastArgs !== null) {
					func(...lastArgs);
					lastArgs = null;
				}
			}, delay);
		} else {
			lastArgs = args;
		}
	};
};
