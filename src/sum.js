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

const sum = (...values) => {
	if (!values?.length) {
		return 0;
	}

	return values.flat(Infinity).reduce((a, b) => a + b);
};

export default sum;
