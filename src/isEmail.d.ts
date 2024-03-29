/**
 * Determine whether a string is an email address
 * @description-cn 判断字符串是否是邮箱格式
 * @param {string} email - The string to search within.
 * @returns {boolean} Returns true if value is an email, else false.
 * @example
 * isEmail("example@abc.com") => true
 * isEmail("abc.com") => false
 * isEmail("a.b.example@abc.com") => true
 * isEmail("a..example@abc.com") => false
 */

declare function isEmail(email: string): boolean;

declare module "xtt-utils" {
	export { isEmail };
}

declare module "xtt-utils/isEmail" {
	export { isEmail as default };
}

export { isEmail, isEmail as default };
