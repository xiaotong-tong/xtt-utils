const {
	generateSudoku,
	generateSudokuBoard,
	isValidSudokuBoard
} = require("xtt-utils");

expect.extend({
	isValidSudokuBoard: (board) => {
		console.log(board);
		if (isValidSudokuBoard(board)) {
			return {
				message: () =>
					`expected ${board} not to be a valid sudoku board`,
				pass: true
			};
		} else {
			return {
				message: () => `expected ${board} to be a valid sudoku board`,
				pass: false
			};
		}
	},
	isValidSudoku: (board) => {
		if (
			board.flat(1).length === 81 &&
			board.flat(1).every((i) => i <= 9 && i >= 0)
		) {
			return {
				message: () =>
					`expected ${board} not to be a valid sudoku board`,
				pass: true
			};
		} else {
			return {
				message: () => `expected ${board} to be a valid sudoku board`,
				pass: false
			};
		}
	}
});

describe("generateSudokuBoard module", () => {
	test("success", () => {
		expect(generateSudokuBoard()).isValidSudokuBoard();

		expect(
			isValidSudokuBoard([
				[7, 1, 5, 3, 4, 2, 9, 8, 6],
				[6, 3, 8, 9, 5, 1, 4, 2, 7],
				[9, 4, 2, 7, 8, 6, 5, 1, 3],
				[5, 8, 4, 6, 1, 3, 7, 9, 2],
				[3, 7, 1, 8, 2, 9, 6, 5, 4],
				[2, 9, 6, 5, 7, 4, 8, 3, 1],
				[1, 5, 9, 2, 6, 7, 3, 4, 8],
				[8, 2, 7, 4, 3, 5, 1, 6, 9],
				[4, 6, 3, 1, 9, 8, 2, 7, 5]
			])
		).toBe(true);

		expect(
			isValidSudokuBoard([
				[7, 1, 5, 3, 4, 2, 9, 8, 6],
				[1, 3, 8, 9, 5, 1, 4, 2, 7],
				[9, 4, 2, 7, 8, 6, 5, 1, 3],
				[5, 8, 4, 6, 1, 3, 7, 9, 2],
				[3, 7, 1, 8, 2, 9, 6, 5, 4],
				[2, 9, 6, 5, 7, 4, 8, 3, 1],
				[1, 5, 9, 2, 6, 7, 3, 4, 8],
				[8, 2, 7, 4, 3, 5, 1, 6, 9],
				[4, 6, 3, 1, 9, 8, 2, 7, 5]
			])
		).toBe(false);

		expect(isValidSudokuBoard([7, 1, 5, 3, 4, 2, 9, 8, 6])).toBe(false);

		expect(isValidSudokuBoard()).toBe(false);
	});
});

describe("generateSudoku module", () => {
	test("success", () => {
		expect(generateSudoku()).isValidSudoku();
	});
});
