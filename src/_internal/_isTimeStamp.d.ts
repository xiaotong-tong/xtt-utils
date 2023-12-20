type TimeStamp = `${number}` & { length: 13 };

/**
 * @description Determine whether the value is a timestamp
 * @description-cn 判断值是否是时间戳
 * @param {string} timeStemp - The value to search within.
 * @returns {boolean} Returns true if value is a timestamp, else false.
 * @example
 * _is13BitsTimeStamp("1702902930755") => true
 */

declare function _is13BitsTimeStamp(timeStemp: TimeStamp | number): boolean;

declare module "xtt-utils" {
	export type { _is13BitsTimeStamp };
}

declare module "xtt-utils/_is13BitsTimeStamp" {
	export type { _is13BitsTimeStamp as default };
}

export type { _is13BitsTimeStamp, _is13BitsTimeStamp as default };
