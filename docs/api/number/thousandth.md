# [thousandth](../../../src/number/thousandth.ts)

将数字转换为千分位格式

## 参数

-   `num` (number)：要转换的数字

## 返回值

-   `string`：转换后的字符串

## 示例

```js
thousandth(1000); // "1,000"
thousandth(1000000); // "1,000,000"
thousandth(1000000.1234); // "1,000,000.1234"
```

## 参考

-   MDN [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
