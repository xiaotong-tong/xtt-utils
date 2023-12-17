# toB64

Convert input to base64 string.

> warning
>
> This functino is supported in browser environment only when input is `File` or `Blob`.
> Not supported in node.js environment. Because `FileReader` is not a global object in node.js.

## params

-   input (File | Blob | string | number): input

## returns

-   (Promise<string>): promise of the base64 string

## examples

```javascript
toB64("hello world"); // "aGVsbG8gd29ybGQ="
```
