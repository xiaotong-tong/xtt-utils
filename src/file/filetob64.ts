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
