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

		// 获取 puppeteer 的 Error 对象，因为 Error 是构造函数，所以无法通过 page.evaluate 传递
		// 这里获取一个 Error 对象，然后通过 page.evaluate 传递这个对象，后通过原型链获取到 Error 对象
		let PageErr = await page.evaluate(() => {
			return new Error();
		});

		try {
			await page.evaluate(() => {
				css(document.querySelector("#test1"), {
					width: "200px",
					"max-width": "100px"
				});
				return css(document.querySelector("#test1"), "width");
			});
		} catch (err) {
			expect(err.toString()).toMatch("TypeError: element is not a ELEMENT_NODE");
			// 下面这行运行会报错，个人觉得是因为 err 是 puppeteer 的 Error 对象，而不是当前环境的 Error 对象
			// expect(err).toBeInstanceOf(Error);
			expect(err).toBeInstanceOf(PageErr.__proto__.constructor);
		}
	});
});
