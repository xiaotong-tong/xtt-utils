/**
 * @description Format a date
 * @description-cn 格式化日期
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
declare function formatDate(
	date: Date | string | number,
	format:
		| string
		| {
				format: string;
				lang?: string;
		  }
): string;

/**
 * @callback FormatFn
 * @description Partial function with date fixed
 * @description-cn 固定了日期的偏函数
 * @param {string | object} [format] If format is a string, it will be automatically changed to { format: input }
 * @param {string} [format.format="YYYY-MM-DD hh:mm:ss"] format string like 'YYYY-MM-DD hh:mm:ss'
 * @param {string} [format.lang="en"] language
 * @returns {string} formatted date string
 */

type FormatFn = (
	format:
		| string
		| {
				format: string;
				lang?: string;
		  }
) => string;

/**
 * @description Format a date
 * @description-cn 格式化日期
 * @param {Date | string | number} date The date to format.
 * @returns {FormatFn} return a partial function with the date fixed.
 * @example
 * formatDate("2023-01-01")("YYYY-M-D h:m:s") // => '2023-1-1 0:0:0'
 * formatDate("2023-01-01")("dddd") // => 'Sunday'
 * formatDate("2023-01-01")({ format: "dddd", lang: "zh-CN" }) // => '星期日'
 */
declare function formatDate(date: Date): FormatFn;

declare module "xtt-utils" {
	export type { formatDate };
}

declare module "xtt-utils/formatDate" {
	export type { formatDate as default };
}

export type { formatDate, formatDate as default };
