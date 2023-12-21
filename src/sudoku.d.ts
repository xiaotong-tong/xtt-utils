/**
 * @description generate a sudoku board
 * @description-cn 随机生成一个数独终盘
 * @category Random
 * @returns {number[][]} Returns a sudoku board
 * @example
 * generateSudokuBoard() // -> [[...], ...] // 9 * 9
 */

declare function generateSudokuBoard(): number[][];

/**
 * @description generate a sudoku board with spaces
 * @description-cn 随机生成一个数独游戏初始化盘面
 * @category Random
 * @param {number} [square=44] The number of given squares in the board
 * @returns {number[][]} Returns a sudoku board with spaces, the spaces value is 0
 * @example
 * generateSudoku() // -> [[...], ...] // 9 * 9
 */

declare function generateSudoku(square?: number): number[][];

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
	export { generateSudokuBoard, isValidSudokuBoard, generateSudoku };
}

declare module "xtt-utils/generateSudokuBoard" {
	export { generateSudokuBoard as default };
}

declare module "xtt-utils/generateSudoku" {
	export { generateSudoku as default };
}

declare module "xtt-utils/isValidSudokuBoard" {
	export { isValidSudokuBoard as default };
}

export { generateSudokuBoard, isValidSudokuBoard, generateSudoku };
