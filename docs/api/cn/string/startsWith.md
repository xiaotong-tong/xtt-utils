# startsWith

判断字符串是否以指定的字符串或正则表达式匹配的字符串开头

## params

-   str (string)：要判断的字符串

-   prefix (string | RegExp)：要判断的字符串或正则表达式

-   [position] (number)：开始判断的位置

## returns

-   (boolean)：如果字符串以指定的字符串或正则表达式匹配的字符串开头，则返回 `true`，否则返回 `false`

## example

```js
startsWith("Hello World!", "Hello"); // true
startsWith("Hello World!", "World"); // false
startsWith("Hello World!", "World", 6); // true
startsWith("Hello World!", /Hello/); // true
startsWith("Hello World!", /World/); // false
startsWith("Hello World!", /World/, 6); // true
```
