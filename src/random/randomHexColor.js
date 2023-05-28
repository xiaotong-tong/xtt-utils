/**
 * @description Generates a random hexadecimal color value
 * @description-cn 生成一个随机的十六进制颜色值
 * @category Random
 * @returns {string} Returns the random hexadecimal color value
 * @example
 * randomHexColor() // #e672ac
 */

export const randomHexColor = () => {
	return `#${Math.floor(Math.random() * 0xffffff)
		.toString(16)
		.padStart(6, "0")}`;
};
