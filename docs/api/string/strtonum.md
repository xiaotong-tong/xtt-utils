# [strToNum](../../../src/string/strtonum.ts)

将字符串转换为数字

## params

-   `text` (string)：要转换的字符串

## returns

-   `number`：转换后的数字

## example

```js
strToNum("123"); // 123
strToNum("123.456"); // 123.456
strToNum("123.456.789"); // 123.456789
strToNum("fdsf12fd3.4fsdf56.7fds89"); // 123.456789
strToNum("-fdsf12fd3.4fsdf56.7fds89"); // -123.456789
```
