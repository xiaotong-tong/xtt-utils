# [startsWith](../../../src/string/startswith.ts)

判断字符串是否以指定的字符串或正则表达式开头

## 参数

- `str` (string)：要判断的字符串

- `prefix` (string | RegExp)：要判断的字符串或正则表达式

- `position` (number)：开始判断的位置

## 返回值

- `boolean`：如果字符串以指定的字符串或正则表达式开头，则返回 `true`，否则返回 `false`

## 示例

```js
startsWith("Hello World!", "Hello"); // true
startsWith("Hello World!", "World"); // false
startsWith("Hello World!", "World", 6); // true
startsWith("Hello World!", /Hello/); // true
startsWith("Hello World!", /World/); // false
startsWith("Hello World!", /World/, 6); // true
```
