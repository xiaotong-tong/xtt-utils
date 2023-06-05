/**
 * 测试函数执行时间
 * @param {Function} fn
 * @param {number} times
 */
export const _runTimes = (fn, times) => {
	if (typeof fn !== "function") {
		throw new TypeError("Expected a function");
	}

	times = times || 1;

	console.time("runTimes");

	for (let i = 0; i < times; i++) {
		fn();
	}

	console.timeEnd("runTimes");
};
