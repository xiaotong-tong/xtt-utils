# curry

函数柯里化

如果想使用占位符,请使用 `curry.placeholder` 属性

## params

-   fn (Function)：要柯里化的函数
-   [args] (...any)：初始化的参数

## returns

-   (Function | any)：柯里化后的函数,如果参数已经足够,则返回函数执行结果

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
