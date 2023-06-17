module.exports = {
	launch: {
		headless: "new",
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
		// executablePath: os.type() === "Linux" ? "google-chrome-stable" : null,
		executablePath: process.env.WSLENV ? "google-chrome-stable" : null,
	}
};
