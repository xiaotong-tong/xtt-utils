/**
 * @support browser
 * @description Set or get the style of an element
 * @description-cn 设置或获取元素的样式
 * @param {HTMLElement} element
 * @param {object | string} styles - If it is an object, the key is the style name, and the value is the style value. If it is a string, it will be used as the style name to get or set the style value.
 * @param {string} value - If styles is a string, value will be used as the style value to set.
 * @returns {HTMLElement | string} - If get, return the style value, otherwise return the element itself.
 * @example
 * css(document.body, "font-size", "16px"); // -> document.body
 * css(document.body, "font-size"); // -> 16px
 * css(document.body, {
 *     fontSize: "16px",
 *     color: "red"
 * }); // -> document.body
 */
const css = (element, styles, value) => {
	if (element?.nodeType !== Node.ELEMENT_NODE) {
		throw new TypeError("element is not a ELEMENT_NODE");
	}

	if (typeof styles === "object") {
		for (const key in styles) {
			if (Object.hasOwnProperty.call(styles, key)) {
				element.style.setProperty(key, styles[key]);
			}
		}
	} else if (typeof styles === "string") {
		if (value === undefined) {
			return element.style.getPropertyValue(styles) || getComputedStyle(element).getPropertyValue(styles);
		} else {
			element.style.setProperty(styles, value);
		}
	}

	return element;
};

export {
	css,
	css as default
}
