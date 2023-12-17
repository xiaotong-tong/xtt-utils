/**
 * @description Shuffle an array
 * @description-cn 乱序数组
 * @template T
 * @param {T[]} list The array to shuffle
 * @returns {T[]} Returns the new shuffled array
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [2, 4, 1, 5, 3]
 */
declare function shuffle<T>(list: T[]): T[];

declare module "xtt-utils" {
	export type { shuffle };
}

declare module "xtt-utils/suffle" {
	export type { shuffle as default };
}

export type { shuffle, shuffle as default };
