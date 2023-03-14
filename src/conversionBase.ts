export const conversionBase = (num: number, base: number): number | string => {
	if (base === 16) {
		return "0x" + num.toString(16);
	} else if (base === 8) {
		return "0o" + num.toString(8);
	} else if (base === 10) {
		return "" + num.toString(10);
	} else if (base === 2) {
		return "0b" + num.toString(2);
	} else {
		return num;
	}
};
