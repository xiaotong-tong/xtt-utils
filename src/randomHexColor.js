import random from "./random.js";

/**
 * @description Generates a random hexadecimal color value
 * @description-cn 生成一个随机的十六进制颜色值
 * @category Random
 * @param {object} [options] The options object
 * @param {boolean} [options.alpha=false] Whether to include alpha channel
 * @returns {string} Returns the random hexadecimal color value
 * @example
 * randomHexColor() // #e672ac
 * randomHexColor({ alpha: true }) // #8b346ae5
 */

const randomHexColor = (options) => {
	const { alpha = false } = options || {};

	return (
		"#" +
		random(0, alpha ? 0xffffffff : 0xffffff)
			.toString(16)
			.padStart(alpha ? 8 : 6, "0")
	);
};

export default randomHexColor;
