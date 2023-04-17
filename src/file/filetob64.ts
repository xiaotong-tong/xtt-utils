/**
 * @support browser
 * @description Convert file to base64
 * @param {File} file
 * @returns {Promise<string>} base64
 * @example
 * fileToB64(file)
 */

export const fileToB64 = async (file: File) => {
	if (typeof FileReader === "undefined") {
		return Promise.reject(new Error("FileReader is not supported"));
	}

	if (!file) {
		return "";
	}

	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};
