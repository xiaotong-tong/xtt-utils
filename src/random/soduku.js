import { random } from "./random.js";
import { randomList } from "./randomList.js";
import { sum } from "../number/sum.js";

class sudoku {
	#board = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
		[0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
		[0, 0, 0, 0, 0, 0, 0, 0, 0] // 8
	];
	#getRows(row, board = this.#board) {
		return board[row];
	}
	#getCols(col, board = this.#board) {
		let cols = [];
		for (let i = 0; i < 9; i++) {
			cols.push(board[i][col]);
		}
		return cols;
	}
	#getBoxes(row, col, board = this.#board) {
		let boxes = [];
		let startRow = Math.floor(row / 3) * 3;
		let startCol = Math.floor(col / 3) * 3;
		for (let i = startRow; i < startRow + 3; i++) {
			for (let j = startCol; j < startCol + 3; j++) {
				boxes.push(board[i][j]);
			}
		}
		return boxes;
	}

	#choicedGrids = [
		[[], [], [], [], [], [], [], [], []],
		[[], [], [], [], [], [], [], [], []],
		[[], [], [], [], [], [], [], [], []],
		[[], [], [], [], [], [], [], [], []],
		[[], [], [], [], [], [], [], [], []],
		[[], [], [], [], [], [], [], [], []],
		[[], [], [], [], [], [], [], [], []],
		[[], [], [], [], [], [], [], [], []],
		[[], [], [], [], [], [], [], [], []]
	];

	#available(row, col) {
		let available = [];

		for (let i = 1; i <= 9; i++) {
			if (
				!this.#getRows(row).includes(i) &&
				!this.#getCols(col).includes(i) &&
				!this.#getBoxes(row, col).includes(i) &&
				!this.#choicedGrids[row][col].includes(i)
			) {
				available.push(i);
			}
		}
		return available;
	}

	generateBoard() {
		for (let row = 0; row < 9; row++) {
			// 填充第一行
			if (row === 0) {
				randomList(1, 9, { unique: true }).forEach((value, index) => {
					this.#board[0][index] = value;
				});
				continue;
			}

			for (let col = 0; col < 9; col++) {
				let available = this.#available(row, col);

				// 如果没有可用的数字，回溯并将上一个单元格的值加入已选列表
				if (available.length === 0) {
					// 如果是第一列，回溯到上一行的第一列
					if (col === 0) {
						this.#board[row - 1].fill(0);

						// 如果向前回溯，清空回溯格之后的已选列表
						for (let i = 0; i < 9; i++) {
							this.#choicedGrids[row][i] = [];
						}

						row -= 1;
						col -= 1;

						continue;
					}

					this.#choicedGrids[row][col - 1].push(
						this.#board[row][col - 1]
					);
					// 如果向前回溯，清空回溯格之后的已选列表
					for (let i = col; i < 9; i++) {
						this.#choicedGrids[row][i] = [];
					}

					this.#board[row][col - 1] = 0;
					col -= 2;

					continue;
				}

				let value = available[random(0, available.length - 1)];
				this.#board[row][col] = value;
			}
		}

		return this.#board;
	}

	generate(square = 44) {
		let board = this.generateBoard();
		const spaces = 81 - square;

		for (let i = 0; i < spaces; i++) {
			let row = random(0, 8);
			let col = random(0, 8);

			if (board[row][col] === 0) {
				i--;
				continue;
			}

			board[row][col] = 0;
		}

		return board;
	}

	#isValidList(list) {
		let set = new Set(list);
		return set.size === 9 && sum(list) === 45;
	}

	isValidBoard(board) {
		for (let row = 0; row < 9; row++) {
			let rows = this.#getRows(row, board);
			let cols = this.#getCols(row, board);
			let boxes = this.#getBoxes(
				...[
					[1, 1],
					[1, 4],
					[1, 7],
					[4, 1],
					[4, 4],
					[4, 7],
					[7, 1],
					[7, 4],
					[7, 7]
				][row],
				board
			);

			if (
				!this.#isValidList(rows) ||
				!this.#isValidList(cols) ||
				!this.#isValidList(boxes)
			) {
				return false;
			}
		}

		return true;
	}
}

/**
 * @description generate a sudoku board
 * @description-cn 随机生成一个数独终盘
 * @category Random
 * @returns {number[][]} Returns a sudoku board
 * @example
 * generateSodukuBoard() // -> [[...], ...] // 9 * 9
 */

export const generateSodukuBoard = () => {
	const board = new sudoku();
	return board.generateBoard();
};

/**
 * @description generate a sudoku board with spaces
 * @description-cn 随机生成一个数独游戏初始化盘面
 * @category Random
 * @param {number} [square=44] The number of given squares in the board
 * @returns {number[][]} Returns a sudoku board with spaces, the spaces value is 0
 * @example
 * generateSoduku() // -> [[...], ...] // 9 * 9
 */

export const generateSoduku = (square) => {
	const board = new sudoku();
	return board.generate(square);
};

/**
 * @description validate a sudoku board
 * @description-cn 验证一个数独终盘是否合法
 * @category Random
 * @param {number[][]} [board] The sudoku board
 * @returns {boolean} Returns true if the board is valid, else false
 * @example
 * isValidSodukuBoard([[...], ...]) // -> true
 */

export const isValidSodukuBoard = (board) => {
	const soduku = new sudoku();
	return soduku.isValidBoard(board);
};
