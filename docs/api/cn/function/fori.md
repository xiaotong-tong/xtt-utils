# fori

循环执行函数。

## params

-   collection (\*): 要循环的目标。
-   iteratee (Iteratee): 在循环的每次迭代上执行的函数。
-   options (object): 循环的选项。
-   options.thisArg (object): iteratee 函数中的 this 的值。
-   options.asyncIterator (boolean): 目标是否为异步迭代器。

Iteratee:

-   iterator (\*): 当前迭代的值。
-   i (number): 当前迭代的索引。
-   target (\_): 当前迭代的目标。如果目标是对象，则此值为 Object.entries(\_)。

## returns

-   (Array | Promise\<Array>): 返回循环的结果。如果目标是异步迭代器，则返回值是 Promise。
