const { throttle } = require("xtt-utils");

describe("throttle module", () => {
	test("success", () => {
		let count = 0;
		const fn = throttle(() => count++, 3000);

		jest.useFakeTimers();

		for (let i = 1; i < 10; i++) {
			setTimeout(() => {
				fn();
			}, i * 1000);
		}

		jest.advanceTimersByTime(1000);
		expect(count).toBe(1);

		jest.advanceTimersByTime(1000);
		expect(count).toBe(1);

		jest.advanceTimersByTime(1000);
		expect(count).toBe(1);

		jest.advanceTimersByTime(1000);
		expect(count).toBe(2);

		jest.advanceTimersByTime(1000);
		expect(count).toBe(2);

		jest.advanceTimersByTime(1000);
		expect(count).toBe(2);

		jest.advanceTimersByTime(1000);
		expect(count).toBe(3);

		jest.advanceTimersByTime(1000);
		expect(count).toBe(3);

		jest.advanceTimersByTime(1000);
		expect(count).toBe(3);
	});
});
