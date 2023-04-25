/**
 * 获取一个整形数字
 * @param {any} value
 * @param {object} [option] 配置项
 * @param {boolean} [option.NaNFormat] - If true, the NaN value will be converted to 0.
 * @param {boolean} [option.int] - If true, the value will be converted to an integer.
 * @returns {number}
 */

export const toNumber = (value, option) => {
	value = Number(value);

	if (Number.isNaN(value)) {
		return option?.NaNFormat ? 0 : NaN;
	}

	if (value > Number.MAX_SAFE_INTEGER) {
		value = Number.MAX_SAFE_INTEGER;
	} else if (value < Number.MIN_SAFE_INTEGER) {
		value = Number.MIN_SAFE_INTEGER;
	}

	if (option?.int) {
		value = parseInt(value);
	}

	return value;
};
