# compose

组合函数 从右到左依次执行函数组合

## params

-   fns (...Function): 所有要组合的函数必须是单参数函数，最后一个函数可以是多参数函数

## returns

-   (Function): 组合后的执行函数

## example

```js
const _ = xttUtils.curry.placeholder;
const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);
compose(isEndsWith, getTermRight)("Hello World!"); // true
```
