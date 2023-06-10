/**
 * Sums up.
 * @param {...Array} values  The array or parameter list to sum up.
 * @returns {number} Returns the sum
 * @example
 * sum([1, 2, 3]) // 6
 * sum(1, 2, 3) // 6
 */

export const sum = (...values) => {
	if (!values?.length) {
		return 0;
	}

	return values.flat(Infinity).reduce((a, b) => a + b);
};
