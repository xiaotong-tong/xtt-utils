/**
 * @description Converts something to a data url string.
 * @description-cn 将输入转换为 data url 字符串
 * @param {string | number | File | Blob} input The input to convert
 * @param {object} options
 * @param {boolean} [options.base64=true] output value is base64 encoded or not, default is true. but only works when input is string or number
 * @param {string} [options.mime="text/plain"] mime type of output data url, default is "text/plain". but only works when input is string or number
 * @returns {Promise<string>} promise of data url string
 * @example
 * toDataUrl("hello world") // "data:text/plain;base64,aGVsbG8gd29ybGQ="
 * toDataUrl("hello world", { base64: false }) // "data:text/plain,hello world"
 * toDataUrl("hello world", { mime: "text/html" }) // "data:text/html;base64,aGVsbG8gd29ybGQ="
 */

export const toDataUrl = async (input, options) => {
	const { base64 = true, mime = "text/plain" } = options || {};
	if (input instanceof File || input instanceof Blob) {
		if (typeof FileReader === "undefined") {
			return Promise.reject(new Error("FileReader is not supported"));
		}

		if (!input) {
			return "";
		}

		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.readAsDataURL(input);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	} else if (typeof input === "string" || typeof input === "number") {
		let resStr = input;
		let prefix = `data:${mime},`;

		if (base64) {
			resStr = btoa(resStr);
			prefix = `data:${mime};base64,`;
		}
		return prefix + resStr;
	}
};
