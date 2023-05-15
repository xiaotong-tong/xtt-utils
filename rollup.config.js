import terser from "@rollup/plugin-terser";

const utilsFilesNames = [
	"number",
	"number/conversionbase",
	"number/thousandth",
	"random",
	"random/random",
	"random/randomlist",
	"random/weightedrandom",
	"random/randomHexColor",
	"string",
	"string/reverse",
	"string/strtonum",
	"string/chartocodepoint",
	"string/startswith",
	"string/endswith",
	"string/gettermleft",
	"string/gettermright",
	"array",
	"array/shuffle",
	{ value: "function", alias: "fn" },
	{ value: "function/throttle", alias: "fn/throttle" },
	{ value: "function/chain", alias: "fn/chain" },
	{ value: "function/curry", alias: "fn/curry" },
	{ value: "function/compose", alias: "fn/compose" },
	"file",
	"file/b64toblob",
	"file/filetob64"
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

export default [indexFile, utilsFiles, indexMinFile];
