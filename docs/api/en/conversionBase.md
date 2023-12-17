# conversionBase

Converts a number to a string of the specified base.

## params

| name      | type               | default | description              |
| --------- | ------------------ | ------- | ------------------------ |
| num       | number             | -       | The number to convert.   |
| base      | 2 \| 8 \| 10 \| 16 | 10      | The base to convert to.  |
| hasPrefix | boolean            | true    | Whether to add a prefix. |

If hasPrefix is true, when base is 2, the prefix of the return value is '0b'; when base is 8, the prefix of the return value is '0o'; when base is 16, the prefix of the return value is '0x'; when base is 10 or other values, the prefix is not added.

When num is NaN, or converted to NaN after type conversion, it will be treated as 0.

## returns

-   (string)：The converted string.

## example

```js
conversionBase(10, 2); // -> '0b1010'
conversionBase(0xa); // -> '10'
conversionBase(10, 2, false); // -> "1010"
conversionBase(-10, 2); // -> "-0b1010"
```
