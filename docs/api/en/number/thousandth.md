# thousandth

Converts a number to a thousandth format

## params

-   num (number): The number to convert
-   [maximumFractionDigits=20] (number): The maximum number of digits after the decimal point

## returns

-   (string): The converted string with thousandth format

## example

```js
thousandth(1000000); // "1,000,000"
thousandth(1000000.1234); // "1,000,000.1234"
thousandth(1000000.1234, 2); // "1,000,000.12"
```

## references

-   MDN [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
