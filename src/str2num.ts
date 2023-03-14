export const str2Num = (text: string): number => {
	let sign = 1;
	if (typeof text === "number") {
		return text;
	}
	if (!~text.search(/\d/)) {
		return NaN;
	}
	const removeNaNChar = (str) => {
		return str.replace(/\D/g, "");
	};
	if (text.startsWith("-")) {
		sign = -1;
	}
	const pointIndex = text.indexOf(".");
	if (~pointIndex) {
		return (
			sign *
			parseFloat(
				`${removeNaNChar(text.slice(0, pointIndex))}.${removeNaNChar(
					text.slice(pointIndex + 1)
				)}`
			)
		);
	} else {
		return sign * removeNaNChar(text);
	}
};
