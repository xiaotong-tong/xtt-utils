# thousandth

将数字转换为千分位格式

## params

-   num (number): 要转换的数字
-   [maximumFractionDigits=20] (number): 小数点后的最大位数

## returns

-   (string): 转换为千分位格式的字符串

## example

```js
thousandth(1000000); // "1,000,000"
thousandth(1000000.1234); // "1,000,000.1234"
thousandth(1000000.1234, 2); // "1,000,000.12"
```

## references

-   MDN [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
