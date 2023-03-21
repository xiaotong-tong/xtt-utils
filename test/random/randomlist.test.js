const { randomList } = require("xtt-utils/random/randomlist");

expect.extend({
	toBeRandomListWithinRange: (actual, min, max, count) => {
		// 如果数组长度不等于 count，直接返回错误
		if (actual.length !== count) {
			return {
				message: () =>
					`array length is not equal!\n返回值: ${actual}\n预期结果: ${count}`,
				pass: false,
			};
		} else {
			let flag = true;
			for (let i = 0; i < actual.length; i++) {
				if (actual[i] < min || actual[i] > max) {
					flag = false;
					break;
				}
			}
			if (flag) {
				return {
					pass: true,
				};
			} else {
				return {
					message: () =>
						`array item is not in the min-max range!\n返回值: ${actual}\n预期结果: ${min}-${max}`,
					pass: false,
				};
			}
		}
	},
});

describe("randomList module", () => {
	test("success", () => {
		expect(randomList(1, 10, 5)).toBeRandomListWithinRange(1, 10, 5);
		expect(randomList()).toBeRandomListWithinRange(1, 100, 1);
	});
});
