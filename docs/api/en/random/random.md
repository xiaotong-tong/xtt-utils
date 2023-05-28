# random

Generate a random integer between min and max (inclusive of min and max).

## note

If max is greater than Number.MAX_SAFE_INTEGER, it will return an integer between min and Number.MAX_SAFE_INTEGER

If min is less than Number.MIN_SAFE_INTEGER, it will return an integer between Number.MIN_SAFE_INTEGER and max

> Number.MAX_SAFE_INTEGER = 9007199254740991 = 2^53 - 1
>
> Number.MIN_SAFE_INTEGER = -9007199254740991 = -(2^53 - 1)

## params

-   [min=1] (number)：minimum value
-   [max=100] (number)：maximum value

If no parameters are passed, an integer between 1 and 100 (inclusive of 0 and 100) is returned.

If one parameter is included, an integer between 1 and the parameter (inclusive of 1 and max) is returned.

If two parameters are included, an integer between min and max (inclusive of min and max) is returned.

## returns

-   (number)：random integer between min and max (inclusive of min and max).

## example

```js
random(1, 10); // 1 - 10
random(10); // 1 - 10
random(); // 1 - 100
random(-Infinity, Infinity); // -9007199254740991 - 9007199254740991
```
