# [str2Num](../../../src/string/str2Num.ts)

将字符串转换为数字

## 参数

- `text` (string)：要转换的字符串

## 返回值

- `number`：转换后的数字

## 示例

```js
str2Num("123"); // 123
str2Num("123.456"); // 123.456
str2Num("123.456.789"); // 123.456789
str2Num("fdsf12fd3.4fsdf56.7fds89"); // 123.456789
str2Num("-fdsf12fd3.4fsdf56.7fds89"); // -123.456789
```
