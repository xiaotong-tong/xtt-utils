# [nonDuplicateRandomList](../../../src/random/nonduplicaterandomlist.ts)

返回一个不重复的随机数列表

## params

-   `min` (number)：最小值
-   `max` (number)：最大值
-   `count` (?number)：随机数个数

## returns

-   `number[]`：随机数列表

## example

```js
nonDuplicateRandomList(1, 10, 5); // [4, 5, 6, 7, 8]
nonDuplicateRandomList(1, 10, 10); // [8, 7, 10, 4, 3, 5, 2, 1, 9, 6]
nonDuplicateRandomList(1, 10); // [2, 1, 4, 7, 3, 10, 5, 9, 6, 8]
```
