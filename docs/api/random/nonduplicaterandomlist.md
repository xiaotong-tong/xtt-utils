# nonDuplicateRandomList

生成一个没有重复值的随机数列表

## params

-   [min=0] (number)：最小值
-   [max=9] (number)：最大值
-   [count=max-min+1] (number)：生成的随机数的个数

## returns

-   (number[])：随机数列表

## example

```js
nonDuplicateRandomList(1, 10, 5); // [4, 5, 6, 7, 8]
nonDuplicateRandomList(1, 10, 10); // [8, 7, 10, 4, 3, 5, 2, 1, 9, 6]
nonDuplicateRandomList(1, 10); // [2, 1, 4, 7, 3, 10, 5, 9, 6, 8]
```
