/**
 * @description 将字符串转换为数字
 * @param {string} text
 * @returns {number} 返回一个数字
 * @example
 * str2Num("123") // 123
 * str2Num("123.456") // 123.456
 * str2Num("123.456.789") // 123.456789
 */

export const str2Num = (text: string): number => {
	if (text === undefined || text === "" || Number.isNaN(text)) {
		return NaN;
	}

	if (!Number.isNaN(Number(text))) {
		return Number(text);
	}
	// 如果字符串中没有数字，直接返回 NaN
	if (!~text.search(/\d/)) {
		return NaN;
	}
	const removeNaNChar = (str: string): string => {
		return str.replace(/\D/g, "");
	};
	// 如果字符串以 - 开头，代表这个数是负数， 将 sign 设置为 -1
	let sign = 1;
	if (text.startsWith("-")) {
		sign = -1;
	}
	const pointIndex = text.indexOf(".");
	if (~pointIndex) {
		return (
			sign *
			parseFloat(
				`${removeNaNChar(text.slice(0, pointIndex))}.${removeNaNChar(
					text.slice(pointIndex + 1)
				)}`
			)
		);
	} else {
		return sign * parseInt(removeNaNChar(text));
	}
};
