# generateSudoku

Generate a sudoku game initial data.

## params

-   [square=44] (number): The number of given squares in the board

## returns

-   (number[][])：The initial data of the sudoku game

## example

```js
generateSudoku();
// ->
// [
// 	[1, 4, 6, 5, 0, 0, 0, 0, 3],
// 	[0, 0, 2, 6, 0, 0, 0, 9, 0],
// 	[9, 0, 0, 0, 0, 0, 0, 6, 5],
// 	[0, 6, 9, 7, 5, 2, 0, 3, 0],
// 	[5, 0, 0, 3, 6, 1, 0, 8, 0],
// 	[0, 0, 1, 9, 0, 4, 0, 7, 0],
// 	[0, 2, 3, 0, 1, 0, 9, 5, 0],
// 	[0, 9, 8, 2, 3, 5, 6, 0, 7],
// 	[0, 0, 5, 8, 7, 9, 0, 4, 2]
// ];
```

# generateSudokuBoard

Generate a sudoku board.

## returns

-   (number[][])：The sudoku board

## example

```js
generateSudokuBoard();
// ->
// [
// 	[7, 1, 5, 3, 4, 2, 9, 8, 6],
// 	[6, 3, 8, 9, 5, 1, 4, 2, 7],
// 	[9, 4, 2, 7, 8, 6, 5, 1, 3],
// 	[5, 8, 4, 6, 1, 3, 7, 9, 2],
// 	[3, 7, 1, 8, 2, 9, 6, 5, 4],
// 	[2, 9, 6, 5, 7, 4, 8, 3, 1],
// 	[1, 5, 9, 2, 6, 7, 3, 4, 8],
// 	[8, 2, 7, 4, 3, 5, 1, 6, 9],
// 	[4, 6, 3, 1, 9, 8, 2, 7, 5]
// ];
```

# isValidSudokuBoard

Validate a sudoku board.

## params

-   board (number[][]): The sudoku board

## returns

-   (boolean)：Whether the board is valid

## example

```js
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
]); // -> true
```
