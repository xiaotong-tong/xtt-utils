import { fori } from "../function/fori.js";

export class morseCode {
	static morseCode = {
		A: ".-",
		B: "-...",
		C: "-.-.",
		D: "-..",
		E: ".",
		F: "..-.",
		G: "--.",
		H: "....",
		I: "..",
		J: ".---",
		K: "-.-",
		L: ".-..",
		M: "--",
		N: "-.",
		O: "---",
		P: ".--.",
		Q: "--.-",
		R: ".-.",
		S: "...",
		T: "-",
		U: "..-",
		V: "...-",
		W: ".--",
		X: "-..-",
		Y: "-.--",
		Z: "--..",
		1: ".----",
		2: "..---",
		3: "...--",
		4: "....-",
		5: ".....",
		6: "-....",
		7: "--...",
		8: "---..",
		9: "----.",
		0: "-----",
		".": ".-.-.-",
		",": "--..--",
		"?": "..--..",
		"'": ".----.",
		"!": "-.-.--",
		"/": "-..-.",
		"(": "-.--.",
		")": "-.--.-",
		"&": ".-...",
		":": "---...",
		";": "-.-.-.",
		"=": "-...-",
		"+": ".-.-.",
		"-": "-....-",
		_: "..--.-",
		'"': ".-..-.",
		$: "...-..-",
		"@": ".--.-."
	};

	static morseReverse = {
		".-": "a",
		"-...": "b",
		"-.-.": "c",
		"-..": "d",
		".": "e",
		"..-.": "f",
		"--.": "g",
		"....": "h",
		"..": "i",
		".---": "j",
		"-.-": "k",
		".-..": "l",
		"--": "m",
		"-.": "n",
		"---": "o",
		".--.": "p",
		"--.-": "q",
		".-.": "r",
		"...": "s",
		"-": "t",
		"..-": "u",
		"...-": "v",
		".--": "w",
		"-..-": "x",
		"-.--": "y",
		"--..": "z",
		".----": "1",
		"..---": "2",
		"...--": "3",
		"....-": "4",
		".....": "5",
		"-....": "6",
		"--...": "7",
		"---..": "8",
		"----.": "9",
		"-----": "0",
		".-.-.-": ".",
		"--..--": ",",
		"..--..": "?",
		".----.": "'",
		"-.-.--": "!",
		"-..-.": "/",
		"-.--.": "(",
		"-.--.-": ")",
		".-...": "&",
		"---...": ":",
		"-.-.-.": ";",
		"-...-": "=",
		".-.-.": "+",
		"-....-": "-",
		"..--.-": "_",
		".-..-.": '"',
		"...-..-": "$",
		".--.-.": "@"
	};

	/**
	 *
	 * @param {string} str
	 * @param {object} options
	 * @param {string} [options.wordSeparator="  "]
	 * @param {string} [options.charSeparator=" "]
	 */
	static encode(str, options) {
		const { wordSeparator = "  ", charSeparator = " " } = options || {};

		return fori(str.split(" "), (word) =>
			fori(word, (char) => this.morseCode[char.toUpperCase()] ?? char).join(charSeparator)
		).join(wordSeparator);
	}

	/**
	 *
	 * @param {string} str
	 * @param {object} options
	 * @param {string} [options.wordSeparator="  "]
	 * @param {string} [options.charSeparator=" "]
	 */
	static decode(str, options) {
		const { wordSeparator = "  ", charSeparator = " " } = options || {};

		return fori(str.split(wordSeparator), (word) =>
			fori(word.split(charSeparator), (char) => this.morseReverse[char] ?? char).join("")
		).join(" ");
	}
}
