/**
 * @description Converts a data url string to a Blob object.
 * @description-cn 将 data url 字符串转换为 Blob 对象
 * @param {string} data data url string
 * @returns {Promise<Blob>} promise of Blob object
 * @example
 * b64ToBlob("data:image/png;base64,...")
 */

declare function dataUrlToBlob(data: string): Promise<Blob>;

declare module "xtt-utils" {
	export type { dataUrlToBlob };
}

declare module "xtt-utils/dataUrlToBlob" {
	export type { dataUrlToBlob as default };
}

export type { dataUrlToBlob, dataUrlToBlob as default };
