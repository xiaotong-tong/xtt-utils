# b64ToBlob

Converts a base64 string to a Blob object.

## params

-   b64Data (string)：base64 string

## returns

-   (Promise<Blob>)：promise of Blob object

## notes

Usesd `fetch` API, so compatibility should be considered when using in node.js environment. `fetch` API is supported in node.js v18.0.0 and above.

See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
