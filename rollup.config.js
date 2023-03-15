import typescript from "@rollup/plugin-typescript";

const utilsFilesNames = [
	"charToCodePoint",
	"codePointToChar",
	"conversionBase",
	"getNonrandom",
	"random",
	"reversestr",
	"shuffle",
	"str2num",
	"stringToCodePointList",
	"weightedrandom"
];

const utilsFiles = utilsFilesNames.map((name) => ({
	input: `src/${name}.ts`,
	output: [
		{
			file: `dist/cjs/${name}.cjs`,
			format: "cjs"
		},
		{
			file: `dist/esm/${name}.mjs`,
			format: "esm"
		}
	],
	plugins: [typescript()]
}));

export default [...utilsFiles];
