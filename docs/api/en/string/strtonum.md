# strToNum

string to number

## params

-   text (string)：The string to convert.

## returns

-   (number)：The converted number.

## example

```js
strToNum("123"); // 123
strToNum("123.456"); // 123.456
strToNum("123.456.789"); // 123.456789
strToNum("fdsf12fd3.4fsdf56.7fds89"); // 123.456789
strToNum("-fdsf12fd3.4fsdf56.7fds89"); // -123.456789
```
