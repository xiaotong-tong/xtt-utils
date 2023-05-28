# b64ToBlob

将 base64 字符串转换为 Blob 对象。

## params

-   b64Data (string)：base64 字符串

## returns

-   (Promise<Blob>)：一个 Blob 对象的 promise

## notes

使用了 `fetch` API，因此在 node.js 环境中使用需要考虑兼容性， node.js v18.0.0 以上版本才支持 `fetch` API。

详见: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
