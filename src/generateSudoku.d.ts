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

declare module "xtt-utils" {
	export { generateSudoku };
}

declare module "xtt-utils/generateSudoku" {
	export { generateSudoku as default };
}

export { generateSudoku, generateSudoku as default };
