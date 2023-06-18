const { randomList } = require("xtt-utils");

expect.extend({
	toBeRandomListWithinRange: (actual, min, max, count) => {
		// 如果数组长度不等于 count，直接返回错误
		if (actual.length !== count) {
			return {
				message: () => `array length is not equal!\n返回值: ${actual}\n预期结果: ${count}`,
				pass: false
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
					pass: true
				};
			} else {
				return {
					message: () =>
						`array item is not in the min-max range!\n返回值: ${actual}\n预期结果: ${min}-${max}`,
					pass: false
				};
			}
		}
	},
	toBeNonDuplicateRandomListWithinRange: (actual, min, max, count) => {
		// 如果数组长度不等于 count，直接返回错误
		if (actual.length !== count && count < max - min + 1) {
			return {
				message: () => `array length is not equal!\n返回值: ${actual}\n预期结果: ${count}`,
				pass: false
			};
		} else {
			// 如果数组长度等于 count，判断是否有重复值，如果有重复值，直接返回错误
			if (actual.length !== new Set(actual).size) {
				return {
					message: () => `have duplicate value!\n返回值: ${actual}`,
					pass: false
				};
			}

			let flag = true;
			for (let i = 0; i < actual.length; i++) {
				if (actual[i] < min || actual[i] > max) {
					flag = false;
					break;
				}
			}
			if (flag) {
				return {
					pass: true
				};
			} else {
				return {
					message: () =>
						`array item is not in the min-max range!\n返回值: ${actual}\n预期结果: ${min}-${max}`,
					pass: false
				};
			}
		}
	}
});

describe("randomList module", () => {
	test("success", () => {
		expect(randomList(1, 10)).toBeRandomListWithinRange(1, 10, 10);
		expect(randomList(1, 10, 5)).toBeRandomListWithinRange(1, 10, 5);
		expect(randomList()).toBeRandomListWithinRange(1, 10, 10);

		expect(
			randomList(1, 10, {
				count: 5,
				unique: true
			})
		).toBeNonDuplicateRandomListWithinRange(1, 10, 5);

		expect(
			randomList(1, 10, {
				unique: true,
				count: 10
			})
		).toBeNonDuplicateRandomListWithinRange(1, 10, 10);

		expect(
			randomList(1, 10, {
				unique: true,
				count: 11
			})
		).toBeNonDuplicateRandomListWithinRange(1, 10, 11);
	});
});
