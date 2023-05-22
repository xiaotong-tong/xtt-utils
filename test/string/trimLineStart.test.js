const { trimLineStart } = require("xtt-utils/string/trimLineStart");

describe("trimLineStart module", () => {
	test("success", () => {
		expect(trimLineStart("")).toBe("");
		expect(trimLineStart(" ")).toBe("");
		expect(trimLineStart("  trimLineStart")).toBe("trimLineStart");

		// 空格缩进
		expect(
			trimLineStart(`
        expect(trimLineStart("")).toBe("");
        expect(trimLineStart(" ")).toBe("");
        `)
		).toBe(
			`
expect(trimLineStart("")).toBe("");
expect(trimLineStart(" ")).toBe("");
`
		);

		// tab缩进
		expect(
			trimLineStart(`
		expect(trimLineStart("")).toBe("");
		expect(trimLineStart(" ")).toBe("");
		`)
		).toBe(
			`
expect(trimLineStart("")).toBe("");
expect(trimLineStart(" ")).toBe("");
`
		);

		expect(
			trimLineStart(`
			const trimLineStart = (str) => {
				// 正则表达式这样写是为了不匹配没有内容的行，否则会匹配到空行
				const startSpaceAtLine = str.match(/^(?!$)[ \t]*/gm);
			
				if (!startSpaceAtLine) {
					return str;
				}
			
				// 如果只有一行，那么直接使用 trimStart 返回就行，节约性能
				if (startSpaceAtLine.length === 1) {
					return str.trimStart();
				}
			
				// 如果有多行，那么就遍历所有行，获取共同的最小的空格数，然后每行删除最小空格数的空格
				const minSapceNum = startSpaceAtLine.reduce((min, line) => {
					return Math.min(
						typeof min === "number" ? min : min.length,
						line.length
					);
				});
			};`)
		).toBe(
			`
const trimLineStart = (str) => {
	// 正则表达式这样写是为了不匹配没有内容的行，否则会匹配到空行
	const startSpaceAtLine = str.match(/^(?!$)[ \t]*/gm);

	if (!startSpaceAtLine) {
		return str;
	}

	// 如果只有一行，那么直接使用 trimStart 返回就行，节约性能
	if (startSpaceAtLine.length === 1) {
		return str.trimStart();
	}

	// 如果有多行，那么就遍历所有行，获取共同的最小的空格数，然后每行删除最小空格数的空格
	const minSapceNum = startSpaceAtLine.reduce((min, line) => {
		return Math.min(
			typeof min === "number" ? min : min.length,
			line.length
		);
	});
};`
		);
	});
});
