/**
 * @description 将数字转换为千分位
 * @param {number} num 需要转换的数字
 * @returns {string} 返回一个千分位的字符串
 * @example
 * thousandth(1000) // "1,000"
 * thousandth(1000000) // "1,000,000"
 * thousandth(1000000.1234) // "1,000,000.1234"
 */

export const thousandth = (num: number): string => {
	const numberFormat = new Intl.NumberFormat("en-US", {
		maximumFractionDigits: 20
	});
	return numberFormat.format(num);
};
