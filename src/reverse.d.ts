/**
 * @description Reverse a string.
 * @description-cn 反转字符串
 * @param {string} text
 * @returns {string} reverse text
 * @example
 * reverse("hello") // olleh
 * reverse("hello world!") // !dlrow olleh
 */
declare function reverse(text: string): string;

declare module "xtt-utils" {
	export type { reverse };
}

declare module "xtt-utils/reverse" {
	export type { reverse as default };
}

export type { reverse, reverse as default };
