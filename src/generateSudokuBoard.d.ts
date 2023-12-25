/**
 * @description generate a sudoku board
 * @description-cn 随机生成一个数独终盘
 * @category Random
 * @returns {number[][]} Returns a sudoku board
 * @example
 * generateSudokuBoard() // -> [[...], ...] // 9 * 9
 */

declare function generateSudokuBoard(): number[][];

declare module "xtt-utils" {
	export { generateSudokuBoard };
}

declare module "xtt-utils/generateSudokuBoard" {
	export { generateSudokuBoard as default };
}

export { generateSudokuBoard, generateSudokuBoard as default };
