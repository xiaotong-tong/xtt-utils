/**
 * @description 反转字符串
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

	for (let i = text.length - 1; i >= 0; i--) {
		resText += text[i];
	}
	return resText;
};
