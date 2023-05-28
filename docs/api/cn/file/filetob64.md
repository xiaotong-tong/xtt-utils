# fileToB64

将 File 对象转换为 base64 字符串。

> warning
>
> 该函数仅支持浏览器环境。
> 不支持 node.js 环境，因为 `File` 和 `FileReader` 在 node.js 不受支持。

## params

-   file (File): File object

## returns

-   (Promise<string>): base64 字符串的 promise
