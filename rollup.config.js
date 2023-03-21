import typescript from "@rollup/plugin-typescript";

const utilsFilesNames = [
	"number/conversionbase",
	"random/random",
	"random/randomlist",
	"random/nonduplicaterandomlist",
	"random/weightedrandom",
	"string/reverse",
	"string/strtonum",
	"string/chartocodepoint",
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

export default utilsFiles;
