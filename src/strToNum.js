/**
 * @description string to number
 * @description-cn 将字符串转换为数字
 * @category String
 * @param {string} str
 * @returns {number}
 * @example
 * strToNum("123") // 123
 * strToNum("123.456") // 123.456
 * strToNum("123.456.789") // 123.456789
 */

const strToNum = (str) => {
	if (str === undefined || str === "" || Number.isNaN(str)) {
		return NaN;
	}

	if (!Number.isNaN(Number(str))) {
		return Number(str);
	}

	// If the string contains no numbers, return NaN.
	if (!~str.search(/\d/)) {
		return NaN;
	}

	const removeNaNChar = (str) => {
		return str.replace(/\D/g, "");
	};

	// If the string starts with a -, it means the number is negative. Set sign to -1.
	let sign = 1;
	if (str.startsWith("-")) {
		sign = -1;
	}

	const pointIndex = str.indexOf(".");
	if (~pointIndex) {
		return (
			sign * parseFloat(`${removeNaNChar(str.slice(0, pointIndex))}.${removeNaNChar(str.slice(pointIndex + 1))}`)
		);
	} else {
		return sign * parseInt(removeNaNChar(str));
	}
};

export default strToNum;
