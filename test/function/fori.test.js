const { fori } = require("xtt-utils");

describe("fori module", () => {
	test("success", async () => {
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
				b: 8
			},
			(item) => {
				const [key, value] = item;
				count += key + ":" + value;
				count += ",";
			}
		);

		expect(count).toBe("a:7,b:8,");

		count = fori([1, 2, 3], (v, i) => {
			return v * i;
		});
		expect(count).toEqual([0, 2, 6]);

		count = fori(
			[
				1,
				Promise.resolve(2),
				new Promise((res, rej) => {
					setTimeout(() => {
						res(3);
					}, 1000);
				})
			],
			(v, i) => {
				return v * i;
			},
			{
				asyncIterator: true
			}
		);
		expect(await count).toEqual([0, 2, 6]);
	});
});
