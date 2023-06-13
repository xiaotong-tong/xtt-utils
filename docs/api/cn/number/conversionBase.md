# conversionBase

将数字转换为指定进制的字符串

## params

-   num (number)：要转换的数字
-   [base=10] (2 | 8 | 10 | 16)：进制

## returns

-   (string)：转换后的字符串，除十进制外, 其他进制会添加字符串前缀 0x, 0o, 0b

## example

```js
conversionBase(10, 2); // '0b1010'
conversionBase(10, 8); // '0o12'
conversionBase(10, 16); // '0xa'
conversionBase(0xa, 10); // '10'
conversionBase(0xa); // '10'
```
