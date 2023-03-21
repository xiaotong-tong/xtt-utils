const {
	nonDuplicateRandomList
} = require("xtt-utils/random/nonduplicaterandomlist");

expect.extend({
	toBeNonDuplicateRandomListWithinRange: (actual, min, max, count) => {
		// 如果数组长度不等于 count，直接返回错误
		if (actual.length !== count && count < max - min + 1) {
			return {
				message: () =>
					`array length is not equal!\n返回值: ${actual}\n预期结果: ${count}`,
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

describe("nonDuplicateRandomList module", () => {
	test("success", () => {
		expect(
			nonDuplicateRandomList(1, 10, 5)
		).toBeNonDuplicateRandomListWithinRange(1, 10, 5);

		expect(nonDuplicateRandomList()).toBeNonDuplicateRandomListWithinRange(
			0,
			9,
			10
		);

		expect(
			nonDuplicateRandomList(1, 10, 10)
		).toBeNonDuplicateRandomListWithinRange(1, 10, 10);

		expect(
			nonDuplicateRandomList(1, 10, 11)
		).toBeNonDuplicateRandomListWithinRange(1, 10, 11);
	});
});
