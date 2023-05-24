const { fori } = require("xtt-utils/fn/fori");

describe("fori module", () => {
	test("success", () => {
		let count = 0;
		fori([1, 2, 3, 4], (item) => {
			count += item;
		});

		expect(count).toBe(10);

		count = "";
		fori("abcde", (item) => {
			count += item;
			count += ",";
		});

		expect(count).toBe("a,b,c,d,e,");

		count = "";
		fori(
			{
				a: 7,
				b: 8,
			},
			(item) => {
				const [key, value] = item;
				count += key + ":" + value;
				count += ",";
			}
		);

		expect(count).toBe("a:7,b:8,");
	});
});
