/**
 * @description Generate a random integer between min and max (inclusive)
 * @description-cn 生成一个介于 min 和 max 之间的随机整数
 * @param {number} [min = 1] minimum value
 * @param {number} [max = 100] maximum value
 * @returns {number} Returns the random integer
 * @example
 * random(1, 10) // => 1 ~ 10
 * random(10) // => 1 ~ 10
 * random() // => 1 ~ 100
 * random(1.5, 10.5) // => 2 ~ 10
 * random(1, Infinity) // => 1 ~ 2^53 - 1
 */
declare function random(min?: number, max?: number): number;

declare module "xtt-utils" {
	export { random };
}

declare module "xtt-utils/random" {
	export { random as default };
}

export { random, random as default };
