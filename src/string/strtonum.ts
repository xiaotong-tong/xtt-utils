/**
 * @description 将字符串转换为数字
 * @param {string} text
 * @returns {number} 返回一个数字
 * @example
 * strToNum("123") // 123
 * strToNum("123.456") // 123.456
 * strToNum("123.456.789") // 123.456789
 */

export const strToNum = (text: string): number => {
	if (text === undefined || text === "" || Number.isNaN(text)) {
		return NaN;
	}

	if (!Number.isNaN(Number(text))) {
		return Number(text);
	}

	// If the string contains no numbers, return NaN.
	if (!~text.search(/\d/)) {
		return NaN;
	}

	const removeNaNChar = (str: string): string => {
		return str.replace(/\D/g, "");
	};

	// If the string starts with a -, it means the number is negative. Set sign to -1.
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
