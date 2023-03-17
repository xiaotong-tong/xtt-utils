# [random](../../../src/number/random.ts)

返回一个介于 min 和 max 之间的整数 (包含 min 和 max)。

如果不传递参数，返回一个介于 1 和 100 之间的整数 (包含 0 和 100)。

如果包含一个参数，则返回一个介于 1 和参数之间的整数 (包含 1 和 max)。

如果包含两个参数，则返回一个介于 min 和 max 之间的整数 (包含 min 和 max)。

## note

如果 max 大于 Number.MAX_SAFE_INTEGER，会返回一个介于 min 和 Number.MAX_SAFE_INTEGER 之间的整数

如果 min 小于 Number.MIN_SAFE_INTEGER，会返回一个介于 Number.MIN_SAFE_INTEGER 和 max 之间的整数

> Number.MAX_SAFE_INTEGER = 9007199254740991 = 2^53 - 1
>
> Number.MIN_SAFE_INTEGER = -9007199254740991 = -(2^53 - 1)

## 参数

- `min` (number) (可选)：最小值
- `max` (number) (可选)：最大值

## 返回值

- `number`：介于 min 和 max 之间的整数 (包含 min 和 max)。

## 示例

```js
random(1, 10); // 1 - 10
random(10); // 1 - 10
random(); // 1 - 100
random(-Infinity, Infinity); // -9007199254740991 - 9007199254740991
```
