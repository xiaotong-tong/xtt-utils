export const stringToCodePointList = (str: string): number[] => {
	if (!str) {
		return [];
	}
	return [...str].map((char) => char.codePointAt(0) || 0);
};
