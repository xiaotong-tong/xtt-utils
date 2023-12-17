/**
 * @description Generates a random hexadecimal color value
 * @description-cn 生成一个随机的十六进制颜色值
 * @param {object} [options] The options object
 * @param {boolean} [options.alpha=false] Whether to include alpha channel
 * @returns {string} Returns the random hexadecimal color value
 * @example
 * randomHexColor() // #e672ac
 * randomHexColor({ alpha: true }) // #8b346ae5
 */
declare function randomHexColor(options?: { alpha?: boolean }): string;

declare module "xtt-utils" {
	export type { randomHexColor };
}

declare module "xtt-utils/randomHexColor" {
	export type { randomHexColor as default };
}

export type { randomHexColor, randomHexColor as default };
