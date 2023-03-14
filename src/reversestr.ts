export const reverseStr = (text: string): string => {
	let resText = "";

	for (let i = text.length - 1; i >= 0; i--) {
		resText += text[i];
	}
	return resText;
};
