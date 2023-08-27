# toB64

将输入转换为 base64 字符串。

> warning
>
> 该函数在输入为 File 或 Blob 时仅支持浏览器环境。
> 不支持 node.js 环境，因为 `FileReader` 在 node.js 不受支持。

## params

-   input (File | Blob | string | number): 输入

## returns

-   (Promise<string>): base64 字符串的 promise

## examples

```javascript
toB64("hello world"); // "aGVsbG8gd29ybGQ="
```
