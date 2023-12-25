/**
 * @description validate a sudoku board
 * @description-cn 验证一个数独终盘是否合法
 * @category Random
 * @param {number[][]} [board] The sudoku board
 * @returns {boolean} Returns true if the board is valid, else false
 * @example
 * isValidSudokuBoard([[...], ...]) // -> true
 */

declare function isValidSudokuBoard(board: number[][]): boolean;

declare module "xtt-utils" {
	export { isValidSudokuBoard };
}

declare module "xtt-utils/isValidSudokuBoard" {
	export { isValidSudokuBoard as default };
}

export { isValidSudokuBoard, isValidSudokuBoard as default };
