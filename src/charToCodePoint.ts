import { conversionBase } from "./conversionBase";
import { stringToCodePointList } from "./stringToCodePointList";

export const charToCodePoint = (char, base, numAsChar) => {
	if (isNaN(Number(char)) || numAsChar) {
		return stringToCodePointList(char)
			.map((charPoint) => conversionBase(charPoint, base))
			.join("");
	} else {
		return conversionBase(Number(char), base);
	}
};
