const { css } = require("xtt-utils");
require("expect-puppeteer");

describe("css module", () => {
	beforeAll(async () => {
		await page.goto("about:blank");
	});

	test("success", async () => {
		// 往浏览器中注入 css 方法
		await page.addScriptTag({
			content: `const css = ${css.toString()};`
		});

		let width = await page.evaluate(() => {
			const div = document.createElement("div");
			div.id = "test";
			div.textContent = "test";
			div.style.width = "100px";
			document.body.appendChild(div);
			return div.style.width;
		});
		expect(width).toBe("100px");

		width = await page.evaluate(() => {
			return css(document.querySelector("#test"), "width");
		});
		expect(width).toBe("100px");

		width = await page.evaluate(() => {
			css(document.querySelector("#test"), "width", "200px");

			return css(document.querySelector("#test"), "width");
		});
		expect(width).toBe("200px");

		width = await page.evaluate(() => {
			css(document.querySelector("#test"), {
				width: "200px",
				"max-width": "100px"
			});
			return css(document.querySelector("#test"), "width");
		});
		expect(width).toBe("200px");
	});
});
