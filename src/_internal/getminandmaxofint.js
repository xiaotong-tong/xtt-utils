/**
 * 获取一个整数的最大值和最小值
 * @param {number} min
 * @param {number} max
 * @returns {[number, number]} [min, max] 保证min <= max 且min和max都是js 中安全的整数范围内的整数
 * @private
 * @example
 * getMinAndMaxOfInt(1, 10) // [1, 10]
 * getMinAndMaxOfInt(10, 1) // [1, 10]
 * getMinAndMaxOfInt(1.5, 10.9) // [2, 10]
 * getMinAndMaxOfInt(-Infinity, Infinity) // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
 */

export const getMinAndMaxOfInt = (min, max) => {
	if (min > max) {
		const temp = min;
		min = max;
		max = temp;
	}
	max =
		max > Number.MAX_SAFE_INTEGER
			? Number.MAX_SAFE_INTEGER
			: Math.floor(max);
	min =
		min < Number.MIN_SAFE_INTEGER
			? Number.MIN_SAFE_INTEGER
			: Math.ceil(min);

	return [min, max];
};
