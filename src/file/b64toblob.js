/**
 * Converts a base64 string to a Blob object.
 * @param {string} b64Data base64 string
 * @returns {Promise<Blob>} promise of Blob object
 * @example
 * b64ToBlob("data:image/png;base64,...")
 */

export const b64ToBlob = async (b64Data) => {
	return (await fetch(b64Data)).blob();
};
