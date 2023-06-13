# weightedRandom

获取权重随机数

## params

-   randomList (any[] | Object<string,number>)：随机数列表。
    当 randomList 为 Object 时，权重列表将被忽略，Object 的 key 为随机数列表，value 为权重列表
-   [weightList] (number[])：权重列表

## returns

-   (any)：随机数列表中的某一项

## example

```js
weightedRandom([1, 2, 3], [4, 5, 6]); // 4/15 的概率返回 1，5/15 的概率返回 2，6/15 的概率返回 3
weightedRandom({ 1: 4, 2: 5, 3: 6 }); // 同上
```
