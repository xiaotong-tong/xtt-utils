# fileToB64

Converts a file Object to a base64 string.

> warning
>
> This functino is supported in browser environment only.
> Not supported in node.js environment. Because `File` and `FileReader` is not a global object in node.js.

## params

-   file (File): File object

## returns

-   (Promise<string>): promise of the base64 string
