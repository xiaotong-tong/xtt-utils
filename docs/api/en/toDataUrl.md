# toDataUrl

Convert input to data url string

> warning
>
> This functino is supported in browser environment only when input is `File` or `Blob`.
> Not supported in node.js environment. Because `FileReader` is not a global object in node.js.

## params

-   input (File | Blob | string | number): input
-   [options] (object): optional
    -   [options.mimeType="text/plain"] (string): specify the mime type of data url
    -   [options.base64=true] (boolean): whether to return base64 string

## returns

-   (Promise<string>): promise of the data url string

## examples

```javascript
toDataUrl("hello world"); // "data:text/plain;base64,aGVsbG8gd29ybGQ="
toDataUrl("hello world", { base64: false }); // "data:text/plain,hello world"
toDataUrl("hello world", { mime: "text/html" }); // "data:text/html;base64,aGVsbG8gd29ybGQ="
```
