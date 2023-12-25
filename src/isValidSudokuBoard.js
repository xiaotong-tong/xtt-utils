import sudoku from "./_internal/sudoku";

/**
 * @description validate a sudoku board
 * @description-cn 验证一个数独终盘是否合法
 * @param {number[][]} [board] The sudoku board
 * @returns {boolean} Returns true if the board is valid, else false
 * @example
 * isValidSudokuBoard([[...], ...]) // -> true
 */

const isValidSudokuBoard = (board) => {
	return new sudoku().isValidBoard(board);
};

export { isValidSudokuBoard, isValidSudokuBoard as default };
