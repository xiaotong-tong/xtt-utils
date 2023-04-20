/**
 * @support only support browser, because FileReader is not supported in nodejs
 * @description Convert file to base64
 * @param {File} file File Object
 * @returns {Promise<string>} promise of base64 string
 */

export const fileToB64 = async (file) => {
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
