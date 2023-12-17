# curry

Curry a function

If you want to use placeholder, please use `curry.placeholder` property

## params

-   fn (Function): The function to curry
-   [args] (...any)：The arguments to curry

## returns

-   (Function | any)：Curried function, if the parameters are enough, return the result of the function execution

## example

```js
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
const _ = curry.placeholder;
curriedAdd(1, 2, 3); // 6
curriedAdd(1)(2, 3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1)(2)(3); // 6
curriedAdd(_, 2)(1)(3); // 6
curriedAdd(_, 2, 3)(1); // 6
curriedAdd(_, _, 3)(_, 2)(1); // 6
curry(add, 10, 20, 30, 4); // 60
```
