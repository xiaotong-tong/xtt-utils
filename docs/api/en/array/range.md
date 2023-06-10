# range

Create an array of numbers in the range [start, end] with step.

## params

-   [start=0] (number): Start of range
-   [end=0] (number): End of range
-   [step] (number): The value to increment or decrement by.

If only one argument is provided a range from 0 to start is created. start < 0 when step defaults to -1, start > 0 when step defaults to 1.

If two arguments are provided a range from start to end is created. start < end when step defaults to 1, start > end when step defaults to -1.

## returns

-   (Array): Returns the range of numbers.

## example

```js
range(10); // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// the same as range(0, 10) or range(0, 10, 1)

range(-10); // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
// the same as range(0, -10) or range(0, -10, -1)

range(1, 10, 7); // => [1, 8]
range(1, -10, -3); // => [1, -2, -5, -8]
```
