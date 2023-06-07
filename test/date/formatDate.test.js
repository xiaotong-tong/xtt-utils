const { formatDate } = require("xtt-utils");

describe("formatDate module", () => {
	test("success", () => {
		let date = new Date("2020-01-23 06:35:05.123");

		let value = formatDate(date, "YYYY-MM-DD hh:mm:ss");
		expect(value).toBe("2020-01-23 06:35:05");

		value = formatDate(date, "YYYY-M-D h:m:s");
		expect(value).toBe("2020-1-23 6:35:5");

		value = formatDate(date, "YYYY-MM-DD hh:mm:ss.SSS");
		expect(value).toBe("2020-01-23 06:35:05.123");

		value = formatDate(date);
		expect(value("YYYY-MM-DD hh:mm:ss")).toBe("2020-01-23 06:35:05");

		value = formatDate(date);
		expect(value("d")).toBe("4");
		expect(value("dd")).toBe("T");
		expect(value("ddd")).toBe("Thu");
		expect(value("dddd")).toBe("Thursday");

		expect(value({ format: "d", lang: "zh" })).toBe("4");
		expect(value({ format: "dd", lang: "zh" })).toBe("四");
		expect(value({ format: "ddd", lang: "zh" })).toBe("周四");
		expect(value({ format: "dddd", lang: "zh" })).toBe("星期四");
	});
});
