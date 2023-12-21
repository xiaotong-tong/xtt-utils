import toDataUrl from "./toDataUrl.js";

/**
 * @description Converts something to a base64 string.
 * @description-cn 将输入转换为 base64 字符串
 * @param {string | number | File | Blob} input The input to convert
 * @returns {Promise<string>} promise of base64 string
 * @example
 * toB64("hello world") // "aGVsbG8gd29ybGQ="
 */
const toB64 = async (input) => {
	if (typeof input === "string" || typeof input === "number") {
		return btoa(input);
	} else if (input instanceof File || input instanceof Blob) {
		const dataUrl = await toDataUrl(input);

		return dataUrl.replace(/^data:[^,]+,/, "");
	}
};

export {
	toB64,
	toB64 as default
}
