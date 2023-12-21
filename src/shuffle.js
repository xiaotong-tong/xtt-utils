import random from "./random.js";

/**
 * @description Shuffle an array
 * @description-cn 乱序数组
 * @template T
 * @param {T[]} list The array to shuffle
 * @returns {T[]} Returns the new shuffled array
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [2, 4, 1, 5, 3]
 */

const shuffle = (list) => {
	if (!list?.length) {
		return [];
	}

	// Copy the original array to prevent modifying the original array directly
	const copy = [...list];

	for (let i = copy.length - 1; i > 0; i--) {
		const randomIndex = random(0, i);
		const temp = copy[randomIndex];
		copy[randomIndex] = copy[i];
		copy[i] = temp;
	}

	return copy;
};

export {
	shuffle,
	shuffle as default
}
