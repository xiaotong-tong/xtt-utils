# conversionBase

Converts a number to a string of the specified base.

## params

-   num (number)：The number to convert.
-   [base=10] (2 | 8 | 10 | 16)：The base to convert to.

## returns

-   (string)：The converted string. Except for decimal, other bases will add the string prefix 0x, 0o, 0b.

## example

```js
conversionBase(10, 2); // '0b1010'
conversionBase(10, 8); // '0o12'
conversionBase(10, 16); // '0xa'
conversionBase(0xa, 10); // '10'
conversionBase(0xa); // '10'
```
