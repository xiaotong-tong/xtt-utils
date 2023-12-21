/**
 * @description Converts something to a data url string.
 * @description-cn 将输入转换为 data url 字符串
 * @param {string | number | File | Blob} input The input to convert
 * @param {boolean} options.base64 output value is base64 encoded or not, default is true. but only works when input is string or number
 * @param {string} options.mime mime type of output data url, default is "text/plain". but only works when input is string or number
 * @returns {Promise<string>} promise of data url string
 * @example
 * toDataUrl("hello world") // "data:text/plain;base64,aGVsbG8gd29ybGQ="
 * toDataUrl("hello world", { base64: false }) // "data:text/plain,hello world"
 * toDataUrl("hello world", { mime: "text/html" }) // "data:text/html;base64,aGVsbG8gd29ybGQ="
 */

declare function toDataUrl(
	input: string | number | File | Blob,
	options?: { base64?: boolean; mime?: string }
): Promise<string>;

declare module "xtt-utils" {
	export { toDataUrl };
}

declare module "xtt-utils/toDataUrl" {
	export { toDataUrl as default };
}

export { toDataUrl, toDataUrl as default };
