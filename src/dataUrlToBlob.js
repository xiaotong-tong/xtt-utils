/**
 * @description Converts a data url string to a Blob object.
 * @description-cn 将 data url 字符串转换为 Blob 对象
 * @param {string} data data url string
 * @returns {Promise<Blob>} promise of Blob object
 * @example
 * dataUrlToBlob("data:image/png;base64,...")
 */

const dataUrlToBlob = async (data) => {
	return (await fetch(data)).blob();
};

export {
	dataUrlToBlob,
	dataUrlToBlob as default
}
