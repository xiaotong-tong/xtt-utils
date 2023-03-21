# [conversionBase](../../../src/number/conversionbase.ts)

将数字转换为指定进制的字符串

## 参数

- `num` (number)：要转换的数字
- `base` (number)：进制

## 返回值

- `string`：转换后的字符串

## 示例

```js
conversionBase(10, 2); // '0b1010'
conversionBase(10, 8); // '0o12'
conversionBase(10, 16); // '0xa'
conversionBase(0xa, 10); // '10'
```
