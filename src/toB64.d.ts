/**
 * @support only support browser, because FileReader is not supported in nodejs
 * @description Converts something to a base64 string.
 * @description-cn 将输入转换为 base64
 * @param {input} input The input to convert
 * @returns {Promise<string>} promise of base64 string
 */
declare function toB64(input: File | Blob | string | number): Promise<string>;

declare module "xtt-utils" {
	export { toB64 };
}

declare module "xtt-utils/toB64" {
	export { toB64 as default };
}

export default toB64;
