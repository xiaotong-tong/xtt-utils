# [charToCodePoint](../../../src/string//chartocodepoint.ts)

返回一个字符串的 Unicode 编码点。

## 参数

- `str` (string)：要转换的字符串

## 返回值

- `string`：Unicode 编码点

## 示例

```js
charToCodePoint("a"); // "0x61"
charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
charToCodePoint(""); // ""
charToCodePoint("Hello World!"); // "0x480x650x6c0x6c0x6f0x200x570x6f0x720x6c0x640x21"
```
