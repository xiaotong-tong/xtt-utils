/**
 *
 * @description 反转字符串
 * @param text
 * @returns
 * @example
 * reverseStr("hello") // olleh
 * reverseStr("hello world!") // !dlrow olleh
 */

export const reverseStr = (text: string): string => {
	let resText = "";

	for (let i = text.length - 1; i >= 0; i--) {
		resText += text[i];
	}
	return resText;
};
