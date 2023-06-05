/**
 * @private
 * @description Get an number range from 2^53 to -2^53
 * @description-cn 获取一个在从 2^53 到 -2^53 范围内的数字
 * @param {any} value
 * @param {object} [option] Options
 * @param {boolean} [option.NaNFormat=false] If true, the NaN value will be converted to 0.
 * @param {boolean} [option.int=false] If true, the value will be converted to an integer.
 * @param {"round"|"ceil"|"floor"|"trunc"} [option.intFormatType="trunc"] The type of integer conversion, the default is "trunc", you can choose "round", "ceil", "floor" or "trunc
 * @returns {number}
 */

export const _toNumber = (value, option) => {
	value = Number(value);

	if (Number.isNaN(value)) {
		return option?.NaNFormat ? 0 : NaN;
	}

	// Limit the value to the maximum and minimum safe integer range
	if (value > Number.MAX_SAFE_INTEGER) {
		return Number.MAX_SAFE_INTEGER;
	} else if (value < Number.MIN_SAFE_INTEGER) {
		return Number.MIN_SAFE_INTEGER;
	}

	if (option?.int) {
		switch (option.intFormatType) {
			case "ceil":
				value = Math.ceil(value);
				break;
			case "floor":
				value = Math.floor(value);
				break;
			case "round":
				value = Math.round(value);
				break;
			default:
				value = Math.trunc(value);
				break;
		}
	}

	return value;
};
