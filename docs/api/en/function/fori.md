# fori

Loop execution function.

## params

-   collection (\*): The target to be looped through.
-   iteratee (Iteratee): The function to be executed on each iteration of the loop.
-   options (object): The options for the loop.
-   options.thisArg (object): The value of `this` in the iteratee function.
-   options.asyncIterator (boolean): Whether the target is an async iterator.

Iteratee:

-   iterator (\*): The value of the current iteration.
-   i (number): The index of the current iteration.
-   target (\_): The target of the current iteration. If the target is an object, this value is Object.entries(\_).

## returns

-   (Array | Promise\<Array>): Returns the results of the loop. If the target is an async iterator, the return value is a Promise.
