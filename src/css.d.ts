/**
 * @support browser
 * @description get the style of an element
 * @description-cn 获取元素的样式
 * @param {HTMLElement} element
 * @param {string} styles - the style name to get  the style value.
 * @returns {string} - return the style value
 * @example
 * css(document.body, "font-size"); // -> 16px
 */
declare function css(element: HTMLElement, styles: string): string;

/**
 * @support browser
 * @description Set the style of an element
 * @description-cn 设置元素的样式
 * @param {HTMLElement} element
 * @param {object | string} styles - If it is an object, the key is the style name, and the value is the style value. If it is a string, it is the style name.
 * @param {string} value - the style value to set.
 * @returns {HTMLElement} - return the element itself.
 * @example
 * css(document.body, "font-size", "16px"); // -> document.body
 * css(document.body, {
 *     fontSize: "16px",
 *     color: "red"
 * }); // -> document.body
 */
declare function css(element: HTMLElement, styles: { [Prop: string]: string } | string, value?: string): HTMLElement;

declare module "xtt-utils" {
	export { css };
}

declare module "xtt-utils/css" {
	export { css as default };
}

export { css, css as default };
