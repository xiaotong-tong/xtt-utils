const fs = require("fs");
const path = require("path");
const { fori } = require("../../dist/index.cjs");

const methods = {
	random: ["random", "randomList", "weightedRandom", "randomHexColor"],
	string: [
		"reverse",
		"startsWith",
		"endsWith",
		"getTermLeft",
		"getTermRight",
		"getRangeByTerm",
		"charToCodePoint",
		"trimLineStart",
		"strToNum"
	],
	array: ["shuffle", "range", "sum"],
	number: ["conversionBase", "thousandth"],
	file: ["b64ToBlob", "fileToB64"],
	function: ["fori", "throttle", "chain", "compose", "curry"],
	date: ["formatDate"]
};

const title = `# xttUtils

`;

function getContent(lang) {
	let content = title;
	fori(methods, ([method, list]) => {
		content += `## ${method} Methods\n\n`;
		fori(list, (name) => {
			const data = fs
				.readFileSync(path.join(__dirname, lang ?? "en", method, name + ".md"))
				.toString()
				.replace(/^#/gm, "###");
			content += data + "\n";
		});
	});
	return content;
}

fs.writeFileSync(path.join(__dirname, "./generated/xttUtils-en.md"), getContent("en"));
fs.writeFileSync(path.join(__dirname, "./generated/xttUtils-cn.md"), getContent("cn"));
