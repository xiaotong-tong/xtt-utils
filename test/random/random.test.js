const { random } = require("xtt-utils/random/random");

describe("random module", () => {
	test("success", () => {
		let value = random();
		expect(value).toBeGreaterThanOrEqual(1);
		expect(value).toBeLessThanOrEqual(100);

		value = random(10);
		expect(value).toBeGreaterThanOrEqual(1);
		expect(value).toBeLessThanOrEqual(10);

		value = random(1, 10);
		expect(value).toBeGreaterThanOrEqual(1);
		expect(value).toBeLessThanOrEqual(10);

		value = random(1.5, 10.5);
		expect(value).toBeGreaterThanOrEqual(2);
		expect(value).toBeLessThanOrEqual(10);

		value = random(
			1,
			99999999999999999999999999999999999999999999999999999999999
		);
		expect(value).toBeGreaterThanOrEqual(1);
		expect(value).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);

		value = random(1, Infinity);
		expect(value).toBeGreaterThanOrEqual(1);
		expect(value).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);

		value = random(
			-99999999999999999999999999999999999999999999999999999999999,
			100
		);
		expect(value).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
		expect(value).toBeLessThanOrEqual(100);

		value = random(-Infinity, 100);
		expect(value).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
		expect(value).toBeLessThanOrEqual(100);

		value = random(1.5e3, 1.5e4);
		expect(value).toBeGreaterThanOrEqual(1.5e3);
		expect(value).toBeLessThanOrEqual(1.5e4);

		value = random(0x10, 0x20);
		expect(value).toBeGreaterThanOrEqual(0x10);
		expect(value).toBeLessThanOrEqual(0x20);
	});

	test("warning", () => {
		let value = random(100, 1);
		expect(value).toBeGreaterThanOrEqual(1);
		expect(value).toBeLessThanOrEqual(100);

		value = random(NaN, 100);
		expect(value).toBe(NaN);

		value = random("1", "100");
		expect(value).toBeGreaterThanOrEqual(1);
		expect(value).toBeLessThanOrEqual(100);

		value = random("", 100);
		expect(value).toBeGreaterThanOrEqual(1);
		expect(value).toBeLessThanOrEqual(100);
	});
});
