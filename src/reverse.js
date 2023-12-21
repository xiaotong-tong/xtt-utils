/**
 * @description Reverse a string.
 * @description-cn 反转字符串
 * @param {string} text
 * @returns {string} reverse text
 * @example
 * reverse("hello") // olleh
 * reverse("hello world!") // !dlrow olleh
 */

const reverse = (text) => {
	if (!text?.length) {
		return "";
	}
	let resText = "";

	for (const i of text) {
		resText = i + resText;
	}
	return resText;
};

export {
	reverse,
	reverse as default
}
