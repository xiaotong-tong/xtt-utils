/**
 * @description Reverse a string.
 * @description-cn 反转字符串
 * @category String
 * @param {string} text
 * @returns {string} reverse text
 * @example
 * reverse("hello") // olleh
 * reverse("hello world!") // !dlrow olleh
 */

export const reverse = (text) => {
	if (!text?.length) {
		return "";
	}
	let resText = "";

	for (const i of text) {
		resText = i + resText;
	}
	return resText;
};