/**
 * @description Determine whether the value is a timestamp
 * @description-cn 判断值是否是时间戳
 * @param {string} timeStemp - The value to search within.
 * @returns {boolean} Returns true if value is a timestamp, else false.
 * @example
 * _is13BitsTimeStamp("1702902930755") => true
 */

function _is13BitsTimeStamp(timeStemp) {
	if (typeof timeStemp !== "string" || typeof timeStemp !== "number") {
		return false;
	}

	return /^\d{13}$/.test(timeStemp);
}

export default _is13BitsTimeStamp;
