import { conversionBase } from "./conversionBase";
import { stringToCodePointList } from "./stringToCodePointList";

export const charToCodePoint = (char: number | string, base: number, numAsChar?: boolean):number |string => {
	if (isNaN(Number(char)) || numAsChar) {
		return stringToCodePointList(char.toString())
			.map((charPoint) => conversionBase(charPoint, base))
			.join("");
	} else {
		return conversionBase(Number(char), base);
	}
};
