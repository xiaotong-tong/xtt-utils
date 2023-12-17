# toDataUrl

将输入转换为 data url 字符串

> warning
>
> 该函数在输入为 File 或 Blob 时仅支持浏览器环境。
> 不支持 node.js 环境，因为 `FileReader` 在 node.js 不受支持。

## params

-   input (File | Blob | string | number): 输入
-   [options] (object): 可选项
    -   [options.mimeType="text/plain"] (string): 指定 data url 的 mime type
    -   [options.base64=true] (boolean): 是否返回 base64 字符串

## returns

-   (Promise<string>): data url 字符串的 promise

## examples

```javascript
toDataUrl("hello world"); // "data:text/plain;base64,aGVsbG8gd29ybGQ="
toDataUrl("hello world", { base64: false }); // "data:text/plain,hello world"
toDataUrl("hello world", { mime: "text/html" }); // "data:text/html;base64,aGVsbG8gd29ybGQ="
```
