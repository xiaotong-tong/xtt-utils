const fs = require("fs");
const path = require("path");

const methods = [
	"random",
	"randomList",
	"weightedRandom",
	"randomHexColor",
	"sudoku",
	"reverse",
	"startsWith",
	"endsWith",
	"getTermLeft",
	"getTermRight",
	"getRangeByTerm",
	"charToCodePoint",
	"trimLineStart",
	"strToNum",
	"isEmail",
	"shuffle",
	"range",
	"conversionBase",
	"thousandth",
	"sum",
	"toB64",
	"dataUrlToBlob",
	"toDataUrl",
	"fori",
	"throttle",
	"chain",
	"compose",
	"curry",
	"formatDate",
	"css"
];

const title = `# xttUtils

`;

function getContent(lang) {
	let content = title;
	methods.forEach((name) => {
		const data = fs
			.readFileSync(path.join(__dirname, lang ?? "en", name + ".md"))
			.toString()
			.replace(/^#/gm, "##");
		content += data + "\n";
	});

	return content;
}

fs.writeFileSync(path.join(__dirname, "../pages/xttUtils-en.md"), getContent("en"));
fs.writeFileSync(path.join(__dirname, "../pages/xttUtils-cn.md"), getContent("cn"));
