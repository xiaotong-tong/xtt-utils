/**
 * @description Convert base64 to blob
 * @param {string} b64Data
 * @returns {Promise<Blob>}
 * @example
 * b64ToBlob("data:image/png;base64,...")
 */

export const b64ToBlob = async (b64Data: string) => {
	return (await fetch(b64Data)).blob();
};
