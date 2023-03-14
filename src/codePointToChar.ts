import { conversionBase } from "./conversionBase";

export const codePointToChar = (codePoint, isNumber) => {
	if (isNumber) {
		return conversionBase(Number(codePoint), 10);
	}
	return String.fromCodePoint(codePoint);
};
