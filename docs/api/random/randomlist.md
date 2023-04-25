# randomList

生成一个随机数列表

## params

-   [min=1] (number)：最小值
-   [max=10] (number)：最大值
-   [number|option] (object)：配置项, 如果是数字，则表示列表个数
    -   [option.count=max-min+1] (number)：列表个数
    -   [option.unique=false] (boolean)：列表中的数是否唯一

min 和 max 参数与 [random](./random.md) 方法一致。(默认值除外)

## returns

-   (number[])：每项均介于 min 和 max 之间的 length 为 count 的随机数列表

## example

```js
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
