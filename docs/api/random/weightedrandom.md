# [weightedRandom](../../../src/random//weightedrandom.ts)

返回一个带权重的随机数

## 参数

- `randomList` (number[])：随机数列表

- `weightList` (number[])：权重列表

或者

- `randomList` ({random: weight})：随机数与权重的键值对

## 返回值

- `any`：随机数

## 示例

```js
weightedRandom([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // 5
weightedRandom([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // 4
```
