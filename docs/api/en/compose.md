# compose

Compose functions from right to left.

## params

-   fns (...Function): All functions to compose must be single-parameter functions, and the last function can be a multi-parameter function

## returns

-   (Function): The function after composition

## example

```js
const _ = xttUtils.curry.placeholder;
const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);
compose(isEndsWith, getTermRight)("Hello World!"); // true
```
