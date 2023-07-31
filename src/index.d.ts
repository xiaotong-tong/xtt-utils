declare module "xtt-utils" {
	/**
	 * @description Create an array of numbers in the range [start, end] with step.
	 * @description-cn 创建一个在 [start, end] 范围内的数字数组，步长为 step
	 * @category Array
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} [step=1] The value to increment or decrement by.
	 * @returns {Array} Returns the range of numbers.
	 * @example
	 * range(1, 10, 7) // => [1, 8]
	 * range(10) // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	 * range(-10) // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
	 * range(1, -10, -3) // => [1, -2, -5, -8]
	 */
	export function range(start: number, end: number): number[];

	/**
	 * @description Shuffle an array
	 * @description-cn 乱序数组
	 * @category Array
	 * @param {any[]} list The array to shuffle
	 * @returns {any[]} Returns the new shuffled array
	 * @example
	 * shuffle([1, 2, 3, 4, 5]) // [2, 4, 1, 5, 3]
	 */
	export function shuffle(arr: any[]): any[];

	interface FormatOptions {
		format: string;
		lang: string;
	}

	/**
	 * @description Format a date
	 * @description-cn 格式化日期
	 * @category Date
	 * @param {Date | string | number} date The date to format.
	 * @param {string | object} format If format is a string, it will be automatically changed to { format: input }
	 * @param {string} [format.format="YYYY-MM-DD hh:mm:ss"] format string like 'YYYY-MM-DD hh:mm:ss'
	 * @param {string} [format.lang="en"] language
	 * @returns {string} formatted date string
	 * @example
	 * formatDate("2023-01-01", "YYYY-MM-DD hh:mm:ss") // => '2023-01-01 00:00:00'
	 * formatDate("2023-01-01", "dddd") // => 'Sunday'
	 * formatDate("2023-01-01", { format: "dddd", lang: "zh-CN" }) // => '星期日'
	 */
	export function formatDate(date: Date | string | number, format: string | FormatOptions): string;

	/**
	 * @callback FormatFn
	 * @description Partial function with date fixed
	 * @description-cn 固定了日期的偏函数
	 * @param {string | object} [format] If format is a string, it will be automatically changed to { format: input }
	 * @param {string} [format.format="YYYY-MM-DD hh:mm:ss"] format string like 'YYYY-MM-DD hh:mm:ss'
	 * @param {string} [format.lang="en"] language
	 * @returns {string} formatted date string
	 */

	type FormatFn = (format: string | FormatOptions) => string;

	/**
	 * @description Format a date
	 * @description-cn 格式化日期
	 * @category Date
	 * @param {Date | string | number} date The date to format.
	 * @returns {FormatFn} return a partial function with the date fixed.
	 * @example
	 * formatDate("2023-01-01")("YYYY-M-D h:m:s") // => '2023-1-1 0:0:0'
	 * formatDate("2023-01-01")("dddd") // => 'Sunday'
	 * formatDate("2023-01-01")({ format: "dddd", lang: "zh-CN" }) // => '星期日'
	 */
	export function formatDate(date: Date): FormatFn;

	/**
	 * @description Converts a base64 string to a Blob object.
	 * @description-cn 将base64字符串转换为Blob对象
	 * @category File
	 * @param {string} b64Data base64 string
	 * @returns {Promise<Blob>} promise of Blob object
	 * @example
	 * b64ToBlob("data:image/png;base64,...")
	 */

	export function b64ToBlob(b64Data: string): Promise<Blob>;

	/**
	 * @support only support browser, because FileReader is not supported in nodejs
	 * @description Converts File object to base64 string.
	 * @description-cn 将 File 对象转换为 base64
	 * @category File
	 * @param {File} file File Object
	 * @returns {Promise<string>} promise of base64 string
	 */
	export function fileToB64(file: File): Promise<string>;

	/**
	 * @description Open chainable sequence, you must call the value method to get the final value
	 * @description-cn 开启链式调用，必须调用 value 方法获取最终的值
	 * @category Function
	 * @param {object} [self=this] The object of the chainable sequence, default is this
	 * @param {*} [initValue] The initial value of the chainable sequence, default is undefined
	 *
	 * If only one parameter is passed in and the parameter is not an object, the parameter will be used as the initValue value.
	 * If the passed-in is an object, the object will be used as the self value
	 *
	 * @returns {Proxy} Returns a proxy object
	 * @example
	 * chain(xttUtils, "Hello World!").reverse().reverse().getTermRight(" ").endsWith("World").value() // true
	 */
	export function chain(self?: object, initValue?: any): any;

	/**
	 * @description Compose function from right to left
	 * @description-cn 组合函数 从右到左依次执行函数组合
	 * @category Function
	 * @param  {...Function} fns All functions to be combined must be single-parameter functions, and the last function can be a multi-parameter function
	 * @returns {Function} The function after composition
	 * @example
	 * const _ = xttUtils.curry.placeholder;
	 * const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
	 * const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);
	 * compose(isEndsWith, getTermRight)("Hello World!") // true
	 */
	export function compose(...fns: Function[]): Function;

	/**
	 * @description Currying function
	 * @description-cn 函数柯里化
	 * @category Function
	 * @param {Function} fn The function to be curried
	 * @param  {...any} [args] The arguments of the function to be curried
	 * @returns {Function | any} Curried function, if the parameters are enough, return the result of the function execution
	 *
	 * @property {symbol} placeholder used to indicate that the parameter is not passed in
	 *
	 * @example
	 * const add = (a, b, c) => a + b + c;
	 * const curriedAdd = curry(add);
	 * const _ = curry.placeholder;
	 * curriedAdd(1, 2, 3); // 6
	 * curriedAdd(1)(2, 3); // 6
	 * curriedAdd(1, 2)(3); // 6
	 * curriedAdd(1)(2)(3); // 6
	 * curriedAdd(_, 2)(1)(3); // 6
	 * curriedAdd(_, 2, 3)(1); // 6
	 * curriedAdd(_, _, 3)(_, 2)(1); // 6
	 * curry(add, 10, 20, 30, 4); // 60
	 */
	export function curry(fn: Function, ...args: any[]): Function | any;

	/**
	 * @callback Iteratee
	 * @description The function that will be executed on each iteration of the loop
	 * @description-cn 循环体函数
	 * @param {*} iterator The value of the current iteration
	 * @param {number} i The index of the current iteration
	 * @param {*} target The target of the current iteration. If the target is an object, this value is Object.entries(*)
	 */

	type Iteratee = (iterator: any, i: number, target: any) => any;

	/**
	 * @description Loop through the target
	 * @description-cn 循环遍历目标
	 * @category Function
	 * @param {*} collection The target to be looped through
	 * @param {Iteratee} iteratee The function to be executed on each iteration of the loop
	 * @param {object} [options] The options for the loop
	 * @param {object} [options.thisArg] The value of `this` in the iteratee function
	 * @param {boolean} [options.asyncIterator] Whether the target is an async iterator
	 * @returns {Array | Promise<Array>} Returns the results of the loop. If the target is an async iterator, the return value is a Promise
	 */
	export function fori(
		collection: any,
		iteratee: Iteratee,
		options?: { thisArg?: any; asyncIterator?: boolean }
	): any[] | Promise<any[]>;

	/**
	 * @description throttle function
	 * @description-cn 节流函数
	 * @category Function
	 * @param { Function } func  The function to be throttled
	 * @param { number} delay The delay time
	 * @return { Function } Returns the throttled function
	 */
	export function throttle(fn: Function, delay: number): Function;

	/**
	 * @support browser
	 * @description Set or get the style of an element
	 * @description-cn 设置或获取元素的样式
	 * @category HTML
	 * @param {HTMLElement} element
	 * @param {object | string} styles - If it is an object, it will be set as the style of the element. If it is a string, it will be used as the style name to get or set the style value.
	 * @param {string} value - If styles is a string, value will be used as the style value to set.
	 * @returns {HTMLElement | string} - If get, return the style value, otherwise return the element itself.
	 * @example
	 * css(document.body, "font-size", "16px"); // -> document.body
	 * css(document.body, "font-size"); // -> 16px
	 * css(document.body, {
	 *     fontSize: "16px",
	 *     color: "red"
	 * }); // -> document.body
	 */
	export function css(element: HTMLElement, styles: object | string, value?: string): HTMLElement | string;

	/**
	 * @description Converts a number to a string of the specified base
	 * @description-cn 将数字转换为指定进制的字符串
	 * @category Number
	 * @param {number} num The number to convert
	 * @param {2 | 8 | 10 | 16} [base=10] The base to which to convert the number. Must be one of 2, 8, 10, or 16. Defaults to 10.
	 * @param {boolean} [hasPrefix=true] Whether to add the base identifier to the string. Defaults to true.
	 * @returns {string} Returns the string of the specified base.
	 * @example
	 * conversionBase(10, 2) // -> "0b1010"
	 * conversionBase(0xa) // -> "10"
	 * conversionBase(10, 2, false) // -> "1010"
	 * conversionBase(-10, 2) // -> "-0b1010"
	 */
	export function conversionBase(num: number, base?: 2 | 8 | 10 | 16, hasPrefix?: boolean): string;

	/**
	 * @description Sums up
	 * @description-cn 求和
	 * @category Number
	 * @param {...number} values  The array or parameter list to sum up.
	 * @returns {number} Returns the sum
	 * @example
	 * sum([1, 2, 3]) // 6
	 * sum(1, 2, 3) // 6
	 */

	export function sum(...values: number[]): number;

	/**
	 * @description Converts a number to a string with thousand separators
	 * @description-cn 将数字转换为带千分位分隔符的字符串
	 * @category Number
	 * @param {number} num The number to convert
	 * @param {number} [maximumFractionDigits=20] The maximum number of digits after the decimal point
	 * @returns {string} Returns a string with thousand separators
	 * @example
	 * thousandth(1000000) // "1,000,000"
	 * thousandth(1000000.1234) // "1,000,000.1234"
	 */
	export function thousandth(num: number, maximumFractionDigits?: number): string;

	/**
	 * @description Generate a random integer between min and max (inclusive)
	 * @description-cn 生成一个介于 min 和 max 之间的随机整数
	 * @category Random
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
	export function random(min?: number, max?: number): number;

	/**
	 * @description Generates a random hexadecimal color value
	 * @description-cn 生成一个随机的十六进制颜色值
	 * @category Random
	 * @param {object} [options] The options object
	 * @param {boolean} [options.alpha=false] Whether to include alpha channel
	 * @returns {string} Returns the random hexadecimal color value
	 * @example
	 * randomHexColor() // #e672ac
	 * randomHexColor({ alpha: true }) // #8b346ae5
	 */
	export function randomHexColor(options?: { alpha?: boolean }): string;

	/**
	 * @description Generate a list of random numbers
	 * @description-cn 生成一个随机数列表
	 * @category Random
	 * @param {number} [min=1] The minimum value of the range
	 * @param {number} [max=10] The maximum value of the range
	 * @param {number|object} [option] Options for generating the list. If it is a number, it represents the number of items in the list.
	 * @param {number} [option.count=max-min+1] The number of items in the list
	 * @param {boolean} [option.unique=false] Whether the items in the list are unique
	 * @returns {number[]} Returns a list of random numbers, each of which is between min and max (inclusive)
	 * @see ./random.js
	 * @example
	 * randomList(1, 10) // -> [1 ~ 10, ...*9]
	 * randomList(1, 10, 5) // -> [1 ~ 10, ...*4]
	 * randomList(1, 10, { count: 5, unique: true }) // -> [1 ~ 10, ...*4] (unique)
	 */
	export function randomList(
		min?: number,
		max?: number,
		option?: number | { count?: number; unique?: boolean }
	): number[];

	/**
	 * @description Get a random item from a list of random numbers based on the weight list.
	 * @description-cn 获取权重随机数
	 * @category Random
	 * @param {any[] | Object<string,number>} randomList The list of items to choose from.
	 * @param {number[]} [weightedList] The list of weights to apply to each item.
	 * When randomList is an object, the weightedList will be ignored. The keys of the object are the items to choose from, and the values are the weights to apply to each item.
	 * @returns {any} Returns the randomly selected item.
	 * @example
	 * weightedRandom([1, 2, 3], [4, 5, 6]) // 4/15 probability returns 1, 5/15 probability returns 2, 6/15 probability returns 3
	 * weightedRandom({ 1: 4, 2: 5, 3: 6 }) // ditto
	 */
	export function weightedRandom(randomList: any[] | { [key: string]: number }, weightedList?: number[]): any;

	/**
	 * @description Returns the Unicode code point of a string.
	 * @description-cn 返回一个字符串的 Unicode 编码点。
	 * @category String
	 * @param {string} str The string to convert
	 * @param {Object} [options] The options object
	 * @param {string} [options.separator=""] The separator of the converted result, default value is ""
	 * @param {2 | 8 | 10 | 16} [options.base=16] The base to which to convert the number. Must be one of 2, 8, 10, or 16. Defaults to 16.
	 * @returns {string} Returns the Unicode code point of a string
	 * @example
	 * charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
	 * charToCodePoint("Hello World!", { separator: " "}) // "0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
	 * charToCodePoint("Hello World!", { base: 2, separator: " " }) // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
	 */
	export function charToCodePoint(str: string, options?: { separator?: string; base?: 2 | 8 | 10 | 16 }): string;

	/**
	 * Determines whether a string ends with the string or regular expression specified.
	 * @description-cn 判断字符串是否以指定的字符串或正则表达式匹配的字符串结尾。
	 * @category String
	 * @param {string} str - The string to search.
	 * @param {string | RegExp} suffix - The string or regular expression to match the end of the string.
	 * @param {number} [endPosition] - The index at which to end the search.
	 * @returns {boolean} Returns true if the string ends with the string or regular expression specified, otherwise false.
	 * @example
	 * endsWith("abc", "c"); // true
	 * endsWith("abc", "b"); // false
	 * endsWith("abc", "b", 2); // true
	 * endsWith("abc", /c$/); // true
	 * endsWith("abc", /b$/); // false
	 * endsWith("abc", /b$/, 2); // true
	 */
	export function endsWith(str: string, suffix: string | RegExp, endPosition?: number): boolean;

	/**
	 * @description Get the string in a range of strings.
	 * @description-cn 获取字符串中某个范围内的字符串。
	 * @category String
	 * @param {string} str the string to search.
	 * @param {[string | RegExp, string | RegExp]} term the string or regular expression to match the range of the string.
	 * @returns {string} Returns the string in a range of strings.
	 * @example
	 * getRangeByTerm("abcde", ["b", "d"]) // "c"
	 * getRangeByTerm("abcde", ["d", "b"]) // "c"
	 * getRangeByTerm("a1bcd2e", [/\d/, /\d/]) // "bcd"
	 */
	export function getRangeByTerm(str: string, term: [string | RegExp, string | RegExp]): string;

	/**
	 * @description-en Get the string on the left of the matching item in the string
	 * @description-cn 获取字符串中匹配项左侧的字符串
	 * @category String
	 * @param {string} str the string to search
	 * @param {string | RegExp} searchTerm the string or regular expression to match the string
	 * @param {number} [beforeWhichTimes=1] the number of times to match before stopping, default is 1,
	 * if the number is greater than the number of matches, the string to the left of the last match item is returned
	 * @returns {string} Returns the string on the left of the matching item in the string
	 * @example
	 * getTermLeft("abcde", "c") // "ab"
	 * getTermLeft("abcde", "c", 2) // "ab"
	 * getTermLeft("abcdec", "c", 2) // "abcde"
	 * getTermLeft("abc1de2", /\d/) // "abc"
	 * getTermLeft("abc1de2", /\d/, 2) // "abc1de"
	 * getTermLeft("abc1de2", /\d/, 3) // "abc1de"
	 */
	export function getTermLeft(str: string, searchTerm: string | RegExp, beforeWhichTimes?: number): string;

	/**
	 * @description Get the string right of the matching item in the string.
	 * @description-cn 获取字符串中匹配项右侧的字符串
	 * @category String
	 * @param {string} str The string to search
	 * @param {string | RegExp} searchTerm The string or regular expression to match the right of the string.
	 * @param {number} [afterWhichTimes] The number of times to match after stopping, default is 1,
	 * if the number is greater than the number of matches, the string to the right of the last match item is returned
	 * @returns {string} 返回匹配项右侧的字符串
	 * @example
	 * getTermRight("abcde", "c") // "de"
	 * getTermRight("abcde", "c", 2) // "de"
	 * getTermRight("abcdec", "c", 2) // ""
	 * getTermRight("abc1de2", /\d/) // "de2"
	 * getTermRight("abc1de2", /\d/, 2) // ""
	 * getTermRight("abc1de2", /\d/, 3) // ""
	 */
	export function getTermRight(str: string, searchTerm: string | RegExp, afterWhichTimes?: number): string;

	/**
	 * @description Reverse a string.
	 * @description-cn 反转字符串
	 * @category String
	 * @param {string} text
	 * @returns {string} reverse text
	 * @example
	 * reverse("hello") // olleh
	 * reverse("hello world!") // !dlrow olleh
	 */
	export function reverse(text: string): string;

	/**
	 * @description Determines whether a string starts with the string or regular expression specified.
	 * @description-cn 判断字符串是否以指定的字符串或正则表达式匹配的字符串开头。
	 * @category String
	 * @param {string} str The string to search.
	 * @param {string | RegExp} prefix The string or regular expression to match the beginning of the string.
	 * @param {number} [startPosition] The index at which to begin search.
	 * @returns {boolean} Returns true if the string starts with the string or regular expression specified, otherwise false.
	 * @example
	 * startsWith("abc", "a"); // true
	 * startsWith("abc", "b"); // false
	 * startsWith("abc", "b", 1); // true
	 * startsWith("abc", /^a/); // true
	 * startsWith("abc", /^b/); // false
	 * startsWith("abc", /^b/, 1); // true
	 */
	export function startsWith(str: string, prefix: string | RegExp, startPosition?: number): boolean;

	/**
	 * @description string to number
	 * @description-cn 将字符串转换为数字
	 * @category String
	 * @param {string} str
	 * @returns {number}
	 * @example
	 * strToNum("123") // 123
	 * strToNum("123.456") // 123.456
	 * strToNum("123.456.789") // 123.456789
	 */
	export function strToNum(str: string): number;

	/**
	 * @description-en Delete the leading spaces of the line, keep the indent level, if it is multiple lines, then delete the minimum common space number of all lines
	 * @description-cn 删除行前的空格，保留缩进层级，如果是多行，那么会删除所有行的最小共有空格数
	 * @category String
	 * @param {string} str
	 * @param {object} options
	 * @param {boolean} [options.removeFirstEmptyLine=false] Whether to delete the empty line of the first line. The default value is false
	 * @param {boolean} [options.removeLastEmptyLine=false] Whether to delete the empty line of the last line. The default value is false
	 * @returns {string} Returns the string after the operation
	 * @example
	 * trimLineStart("  123") // "123"
	 * trimLineStart("  123\n  456") // "123\n456"
	 * trimLineStart("  123\n    456") // "123\n  456"
	 */
	export function trimLineStart(
		str: string,
		options?: { removeFirstEmptyLine?: boolean; removeLastEmptyLine?: boolean }
	): string;
}
