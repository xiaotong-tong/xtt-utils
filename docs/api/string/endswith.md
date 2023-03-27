# [endsWith](../../../src/string/endwith.ts)

判断字符串是否以指定的字符串或正则表达式结尾

## 参数

- `str` (string)：要判断的字符串

- `suffix` (string | RegExp)：要判断的字符串或正则表达式

- `endPosition` (number)：结束判断的位置

## 返回值

- `boolean`：如果字符串以指定的字符串或正则表达式结尾，则返回 `true`，否则返回 `false`

## 示例

```js
endsWith("Hello World!", "World!"); // true
endsWith("Hello World!", "World"); // false
endsWith("Hello World!", "Hello", 5); // true
endsWith("Hello World!", /World!/); // true
endsWith("Hello World!", /World/); // false
endsWith("Hello World!", /Hello/, 5); // true
```
