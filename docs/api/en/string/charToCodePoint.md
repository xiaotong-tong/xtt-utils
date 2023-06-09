# charToCodePoint

Returns the Unicode code point of a string.

## params

-   str (string)：The string to be converted
-   [options] (Object)：Optional parameters
    -   [separator=""] (string)：separator
    -   [base=16] (2 | 8 | 10 | 16)：base

## returns

-   (string)：Unicode code point

## example

```js
charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
charToCodePoint("Hello World!", { separator: " " }); // "0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
charToCodePoint("Hello World!", { base: 2, separator: " " }); // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
```
