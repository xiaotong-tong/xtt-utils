const { charToCodePoint } = require("xtt-utils/string/charToCodePoint");

describe("charToCodePoint module", () => {
	test("success", () => {
		expect(charToCodePoint("Hello World!")).toBe(
			"0x480x650x6c0x6c0x6f0x200x570x6f0x720x6c0x640x21"
		);

		expect(charToCodePoint("")).toBe("");

		expect(charToCodePoint("Hello World!", { separator: " " })).toBe(
			"0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
		);

		expect(charToCodePoint("Hello World!", { base: 2 })).toBe(
			"0b10010000b11001010b11011000b11011000b11011110b1000000b10101110b11011110b11100100b11011000b11001000b100001"
		);

		expect(charToCodePoint("Hello World!", { base: 2, separator: " " })).toBe(
			"0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
		);

		expect(charToCodePoint("Hello World!", { base: 16 })).toBe(
			"0x480x650x6c0x6c0x6f0x200x570x6f0x720x6c0x640x21"
		);

		expect(charToCodePoint("Hello World!", { base: 16, separator: " " })).toBe(
			"0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
		);

		expect(charToCodePoint("Hello World!", { base: 8 })).toBe(
			"0o1100o1450o1540o1540o1570o400o1270o1570o1620o1540o1440o41"
		);

		expect(charToCodePoint("Hello World!", { base: 8, separator: " " })).toBe(
			"0o110 0o145 0o154 0o154 0o157 0o40 0o127 0o157 0o162 0o154 0o144 0o41"
		);

		expect(charToCodePoint("Hello World!", { base: 10 })).toBe(
			"72101108108111328711111410810033"
		);

		expect(charToCodePoint("Hello World!", { base: 10, separator: " " })).toBe(
			"72 101 108 108 111 32 87 111 114 108 100 33"
		);
	});
});
