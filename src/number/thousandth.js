/**
 * 将数字转换为千分位
 * @param {number} num 需要转换的数字
 * @param {number} [maximumFractionDigits=20] 最大小数位数
 * @returns {string} 返回一个千分位的字符串
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
