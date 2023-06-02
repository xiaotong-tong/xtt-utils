const { shuffle } = require("xtt-utils");

expect.extend({
	toBeShuffleArray: (actual, shuffledArray) => {
		// 如果数组长度不一致，直接返回错误
		if (actual.length !== shuffledArray.length) {
			return {
				message: () => `array length is not equal!\n返回值: ${actual}\n预期结果: ${shuffledArray}`,
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
					message: () => `array is not shuffled!\n返回值: ${actual}\n预期结果: ${shuffledArray}`,
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

		const value = [1, "2", { 3: 3 }, [4, 4], 5];
		expect(shuffle(value)).toBeShuffleArray(value);
		// 测试是否会修改原数组
		expect(value).toEqual([1, "2", { 3: 3 }, [4, 4], 5]);
	});
	test("warning", () => {
		expect(shuffle()).toBeShuffleArray([]);
		// 因为字符串也有length属性，而且也有迭代器，所以同样也会打乱哦
		expect(shuffle("abcde")).toBeShuffleArray(["a", "b", "c", "d", "e"]);
		expect(shuffle(12345)).toBeShuffleArray([]);

		const obj = { 0: "a", 1: "b", 2: "c", length: 3 };
		// 虽然有 length 属性，但是没有迭代器，所以会报错
		expect(() => {
			return shuffle(obj);
		}).toThrow(TypeError);

		// 为对象添加迭代器，使其可以被打乱, 但是这样做是不合理的，虽然可以通过测试
		obj[Symbol.iterator] = function* () {
			let i = 0;
			while (i < this.length) {
				yield this[i++];
			}
		};
		expect(shuffle(obj)).toBeShuffleArray(["a", "b", "c"]);

		expect(shuffle({ a: 1 })).toBeShuffleArray([]);
	});
});
