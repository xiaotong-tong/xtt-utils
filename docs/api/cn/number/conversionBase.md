# conversionBase

将数字转换为指定进制的字符串

## params

| 参数      | 类型               | 默认值 | 描述         |
| --------- | ------------------ | ------ | ------------ |
| num       | number             | -      | 要转换的数字 |
| base      | 2 \| 8 \| 10 \| 16 | 10     | 进制         |
| hasPrefix | boolean            | true   | 是否添加前缀 |

如果 hasPrefix 为 true，当 base 为 2 时，返回值前缀为 '0b'；当 base 为 8 时，返回值前缀为 '0o'；当 base 为 16 时，返回值前缀为 '0x'；当 base 为 10 或其它值时，则不添加前缀。

当 num 为 NaN, 或类型转换后为 NaN 时，后续会当成 0 处理。

## returns

-   (string)：转换后的字符串

## example

```js
conversionBase(10, 2); // -> '0b1010'
conversionBase(0xa); // -> '10'
conversionBase(10, 2, false); // -> "1010"
conversionBase(-10, 2); // -> "-0b1010"
```
