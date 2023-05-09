/**
 * 生成一个随机的十六进制颜色值
 * @returns {string} 返回一个随机的十六进制颜色值
 * @example
 * randomHexColor() // #e672ac
 */

export const randomHexColor = () => {
	return `#${Math.floor(Math.random() * 0xffffff)
		.toString(16)
		.padStart(6, "0")}`;
};

console.log(randomHexColor());
