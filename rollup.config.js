import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";

const utilsFilesNames = [
	"number",
	"number/conversionBase",
	"number/thousandth",
	"number/sum",
	"random",
	"random/random",
	"random/randomList",
	"random/weightedRandom",
	"random/randomHexColor",
	"string",
	"string/reverse",
	"string/strToNum",
	"string/charToCodePoint",
	"string/startsWith",
	"string/endsWith",
	"string/getTermLeft",
	"string/getTermRight",
	"string/getRangeByTerm",
	"string/trimLineStart",
	"array",
	"array/shuffle",
	"array/range",
	{ value: "function", alias: "fn" },
	{ value: "function/throttle", alias: "fn/throttle" },
	{ value: "function/chain", alias: "fn/chain" },
	{ value: "function/curry", alias: "fn/curry" },
	{ value: "function/compose", alias: "fn/compose" },
	{ value: "function/fori", alias: "fn/fori" },
	"file",
	"file/b64ToBlob",
	"file/fileToB64",
	"date",
	"date/formatDate",
	"html",
	"html/css"
];

let utilsFilesInput = {};

utilsFilesNames.forEach((name) => {
	if (typeof name === "object") {
		utilsFilesInput[name.alias] = `src/${name.value}.js`;
	} else if (typeof name === "string") {
		utilsFilesInput[name] = `src/${name}.js`;
	}
});

const utilsFiles = {
	input: utilsFilesInput,
	output: [
		{
			dir: "dist",
			format: "cjs",
			preserveModules: true,
			entryFileNames: "cjs/[name].cjs"
		},
		{
			dir: "dist",
			format: "esm",
			preserveModules: true,
			entryFileNames: "esm/[name].js"
		}
	]
};

const indexFile = {
	input: "src/index.js",
	output: [
		{
			file: "dist/index.js",
			format: "umd",
			name: "xttUtils",
			banner: `/**\n * xttUtils v0.1.1\n * (c) 2023, xtt. (MIT License)\n * https://github.com/xiaotong-tong/xtt-utils\n */\n`
		},
		{
			file: "dist/index.cjs",
			format: "cjs",
			banner: `/**\n * xttUtils v0.1.1\n * (c) 2023, xtt. (MIT License)\n * https://github.com/xiaotong-tong/xtt-utils\n */\n`
		},
		{
			file: "dist/index.esm.js",
			format: "esm",
			banner: `/**\n * xttUtils v0.1.1\n * (c) 2023, xtt. (MIT License)\n * https://github.com/xiaotong-tong/xtt-utils\n */\n`
		}
	]
};

const indexMinFile = {
	input: "src/index.js",
	output: [
		{
			file: "dist/index.min.js",
			format: "umd",
			name: "xttUtils"
		}
	],
	plugins: [terser()]
};

// 打包 typescript 声明文件
const dtsFile = {
	input: "src/index.d.ts",
	output: [{ file: "dist/index.d.ts", format: "es" }],
	plugins: [dts()]
};

export default [indexFile, utilsFiles, indexMinFile, dtsFile];
