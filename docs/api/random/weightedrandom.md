# [weightedRandom](../../../src/random//weightedrandom.ts)

返回一个带权重的随机数

## params

-   `randomList` (number[])：随机数列表

-   `weightList` (number[])：权重列表

或者

-   `randomList` ({random: weight})：随机数与权重的键值对

## returns

-   `any`：随机数列表中的某一项

## example

```js
weightedRandom([4, 2, 5, 1, 3], [1, 2, 3, 4, 5]);
// 返回 4 的概率为 1/15
// 返回 2 的概率为 2/15
// 返回 5 的概率为 3/15
// 返回 1 的概率为 4/15
// 返回 3 的概率为 5/15
```
