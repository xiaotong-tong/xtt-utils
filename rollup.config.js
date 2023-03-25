import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const utilsFilesNames = [
	"number",
	"number/conversionbase",
	"random",
	"random/random",
	"random/randomlist",
	"random/nonduplicaterandomlist",
	"random/weightedrandom",
	"string",
	"string/reverse",
	"string/strtonum",
	"string/chartocodepoint",
	"array",
	"array/shuffle"
];

let utilsFilesInput = {};

utilsFilesNames.forEach((name) => (utilsFilesInput[name] = `src/${name}.ts`));

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
	],
	plugins: [
		typescript({
			outDir: "dist/types",
			declaration: true
		})
	]
};

const indexFile = {
	input: "src/index.ts",
	output: [
		{
			file: "dist/index.js",
			format: "umd",
			name: "xttUtils"
		},
		{
			file: "dist/index.cjs",
			format: "cjs"
		},
		{
			file: "dist/index.esm.js",
			format: "esm"
		}
	],
	plugins: [typescript()]
};

const indexMinFile = {
	input: "src/index.ts",
	output: [
		{
			file: "dist/index.min.js",
			format: "umd",
			name: "xttUtils"
		}
	],
	plugins: [typescript(), terser()]
};

export default [indexFile, utilsFiles, indexMinFile];
