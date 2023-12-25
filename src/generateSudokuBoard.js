import sudoku from "./_internal/sudoku.js";

/**
 * @description generate a sudoku board
 * @description-cn 随机生成一个数独终盘
 * @category Random
 * @returns {number[][]} Returns a sudoku board
 * @example
 * generateSudokuBoard() // -> [[...], ...] // 9 * 9
 */

const generateSudokuBoard = () => {
	return new sudoku().generateBoard();
};

export { generateSudokuBoard, generateSudokuBoard as default };
