const fs = require("fs");
const archiver = require("archiver");

const sourceFiles = [
	"src",
	"docs",
	"test",
	"LICENSE",
	"package.json",
	"README.md",
	"README_CN.md",
	"rollup.config.js",
	"TODO.md",
	"jest.config.mjs",
	"jest-puppeteer.config.cjs",
	".gitignore",
	".eslintrc.json"
];

const version = require("./package.json").version;

// 打包 tar.gz 格式
const archiveTar = archiver("tar", { gzip: true });

const writeTarStream = fs.createWriteStream(`xtt-utils-${version}.tar.gz`);

archiveTar.pipe(writeTarStream);

sourceFiles.forEach((file) => {
	if (["src", "docs", "test"].includes(file)) {
		archiveTar.directory(file, file);
	} else {
		archiveTar.file(file);
	}
});

archiveTar.finalize();

// 打包 zip 格式
const archiveZip = archiver("zip", { zlib: { level: 9 } });

const writeZipStream = fs.createWriteStream(`xtt-utils-${version}.zip`);

archiveZip.pipe(writeZipStream);

sourceFiles.forEach((file) => {
	if (["src", "docs", "test"].includes(file)) {
		archiveZip.directory(file, file);
	} else {
		archiveZip.file(file);
	}
});

archiveZip.finalize();
