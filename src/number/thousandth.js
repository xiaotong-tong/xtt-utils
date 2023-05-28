/**
 * @description Converts a number to a string with thousand separators
 * @description-cn 将数字转换为带千分位分隔符的字符串
 * @category Number
 * @param {number} num The number to convert
 * @param {number} [maximumFractionDigits=20] The maximum number of digits after the decimal point
 * @returns {string} Returns a string with thousand separators
 * @example
 * thousandth(1000000) // "1,000,000"
 * thousandth(1000000.1234) // "1,000,000.1234"
 */

export const thousandth = (num, maximumFractionDigits) => {
	if (typeof maximumFractionDigits === "undefined") {
		maximumFractionDigits = 20;
	}
	const numberFormat = new Intl.NumberFormat("en-US", {
		maximumFractionDigits: maximumFractionDigits
	});
	return numberFormat.format(num);
};
