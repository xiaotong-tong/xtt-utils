const { shuffle } = require("xtt-utils/array/shuffle");

expect.extend({
	toBeShuffleArray: (actual, shuffledArray) => {
		// 如果数组长度不一致，直接返回错误
		if (actual.length !== shuffledArray.length) {
			return {
				message: () =>
					`array length is not equal!\n返回值: ${actual}\n预期结果: ${shuffledArray}`,
				pass: false
			};
		} else {
			let flag = true;
			// 遍历数组，如果有一个元素不在打乱后的数组中，则代表出bug了
			for (let i = 0; i < actual.length; i++) {
				if (!shuffledArray.includes(actual[i])) {
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
						`array is not shuffled!\n返回值: ${actual}\n预期结果: ${shuffledArray}`,
					pass: false
				};
			}
		}
	}
});

describe("shuffle module", () => {
	test("success", () => {
		expect(shuffle([1, 2, 3, 4, 5])).toBeShuffleArray([1, 2, 3, 4, 5]);
		expect(shuffle([])).toBeShuffleArray([]);
	});
	test("warning", () => {
		expect(shuffle()).toBeShuffleArray([]);
	});
});
