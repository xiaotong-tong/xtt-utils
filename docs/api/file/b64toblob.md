# [b64ToBlob](../../../src/file/b64toblob.ts)

Converts a base64 string to a Blob object.

## params

-   `b64Data` (string)：base64 string

## returns

-   `Promise<Blob>`：promise of Blob object

## notes

使用了 `fetch` API，因此在 node.js 环境中使用需要考虑兼容性， node.js v18.0.0 以上版本才支持 `fetch` API。

详见: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
