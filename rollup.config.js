import typescript from "@rollup/plugin-typescript";

const utilsFilesNames = [
	// "charToCodePoint",
	// "codePointToChar",
	// "conversionBase",
	// "getNonrandom",
	"number/random",
	"string/reverse",
	"string/str2num",
	"array/shuffle"
	// "stringToCodePointList",
	// "weightedrandom"
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

export default utilsFiles;
