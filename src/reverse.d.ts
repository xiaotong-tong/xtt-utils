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
	export { reverse };
}

declare module "xtt-utils/reverse" {
	export { reverse as default };
}

export default reverse;
