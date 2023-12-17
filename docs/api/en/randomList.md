# randomList

Generate a random number list

## params

-   [min=1] (number)：minimum value
-   [max=10] (number)：maximum value
-   [number|option] (object)：configuration item, if it is a number, it means the number of list items
    -   [option.count=max-min+1] (number)：number of list items
    -   [option.unique=false] (boolean)：Whether the numbers in the list are unique

min and max parameters are consistent with the [random](./random.md) method. (except for the default value)

## returns

-   (number[])：A random number list of length count, each of which is between min and max

## example

```js
randomList(1, 10); // [4, 2, 3, 7, 4, 2, 8, 9, 4, 1]
randomList(1, 10, 5); // [8, 9, 10, 8, 10]
randomList(1, 10, 10); // [3, 5, 4, 1, 10, 7, 6, 9, 4, 10]
randomList(1, 10, {
	unique: false
}); // [10, 6, 4, 1, 3, 1, 9, 6, 4, 1]

randomList(1, 10, {
	count: 5,
	unique: true
}); // [ 1, 6, 9, 2, 8 ]
randomList(1, 10, {
	count: 10,
	unique: true
}); // [2, 10, 6, 4, 7, 9,  5, 8, 1, 3]
randomList(1, 10, {
	unique: true
}); // [4, 8, 10, 6, 1,5, 2,  7, 9, 3]
```
