import sudoku from "./_internal/sudoku.js";

/**
 * @description generate a sudoku board with spaces
 * @description-cn 随机生成一个数独游戏初始化盘面
 * @param {number} [square=44] The number of given squares in the board
 * @returns {number[][]} Returns a sudoku board with spaces, the spaces value is 0
 * @example
 * generateSudoku() // -> [[...], ...] // 9 * 9
 */

const generateSudoku = (square) => {
	return new sudoku().generate(square);
};

export { generateSudoku, generateSudoku as default };
