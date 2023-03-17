import { conversionBase } from "./conversionBase.js";

export const codePointToChar = (
	codePoint: number,
	isNumber: boolean
): number | string => {
	if (isNumber) {
		return conversionBase(Number(codePoint), 10);
	}
	return String.fromCodePoint(codePoint);
};
