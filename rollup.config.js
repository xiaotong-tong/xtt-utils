import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };

const version = packageJson.version;

const utilsFilesNames = [
	"conversionBase",
	"thousandth",
	"sum",
	"random",
	"randomList",
	"weightedRandom",
	"randomHexColor",
	"generateSudokuBoard",
	"generateSudoku",
	"isValidSudokuBoard",
	"reverse",
	"strToNum",
	"charToCodePoint",
	"startsWith",
	"endsWith",
	"getTermLeft",
	"getTermRight",
	"getRangeByTerm",
	"trimLineStart",
	"isEmail",
	"shuffle",
	"range",
	"throttle",
	"chain",
	"curry",
	"compose",
	"fori",
	"dataUrlToBlob",
	"toDataUrl",
	"toB64",
	"formatDate",
	"css"
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
			banner: `/**\n * xttUtils v${version}\n * (c) 2023, xtt. (MIT License)\n * https://github.com/xiaotong-tong/xtt-utils\n */\n`
		},
		{
			file: "dist/index.cjs",
			format: "cjs",
			banner: `/**\n * xttUtils v${version}\n * (c) 2023, xtt. (MIT License)\n * https://github.com/xiaotong-tong/xtt-utils\n */\n`
		},
		{
			file: "dist/index.esm.js",
			format: "esm",
			banner: `/**\n * xttUtils v${version}\n * (c) 2023, xtt. (MIT License)\n * https://github.com/xiaotong-tong/xtt-utils\n */\n`
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
