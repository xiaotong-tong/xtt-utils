# dataUrlToBlob

Convert data url string to Blob object

## params

-   data (string)：data url string

## returns

-   (Promise<Blob>)：promise of Blob object

## notes

Usesd `fetch` API, so compatibility should be considered when using in node.js environment. `fetch` API is supported in node.js v18.0.0 and above.

See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
