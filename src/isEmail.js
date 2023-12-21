import { emailGrep } from "./_internal/grep.js";

/**
 * Determine whether a string is an email address
 * @description-cn 判断字符串是否是邮箱
 * @param {string} email - The string to search within.
 * @returns {boolean} Returns true if value is an email, else false.
 * @example
 * isEmail("example@abc.com") => true
 * isEmail("abc.com") => false
 * isEmail("a.b.example@abc.com") => true
 * isEmail("a..example@abc.com") => false
 */

const isEmail = (email) => {
	if (typeof email !== "string" || email.length < 6) {
		return false;
	}

	return emailGrep.test(email);
};

export {
	isEmail,
	isEmail as default
}
