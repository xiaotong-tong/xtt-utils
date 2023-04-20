# randomList

生成一个随机数列表

## params

-   [min=1] (number)：最小值
-   [max=100] (number)：最大值
-   [count=1] (number)：列表个数

min 和 max 参数的作用与 [random](./random.md) 方法一致。

## returns

-   (number[])：每项均介于 min 和 max 之间的 length 为 count 的随机数列表

## example

```js
randomList(1, 10, 5); // [8, 9, 10, 8, 10]
randomList(1, 10, 10); // [3, 5, 4, 1, 10, 7, 6, 9, 4, 10]
```
