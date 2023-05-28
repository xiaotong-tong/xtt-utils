# endsWith

Determines whether a string ends with a specified string or a string matched by a regular expression

## params

-   str (string)：The string to be judged

-   suffix (string | RegExp)：The string or regular expression to be judged

-   [endPosition] (number)：The position to end the judgment

## returns

-   (boolean)：Returns `true` if the string ends with a specified string or a string matched by a regular expression, otherwise returns `false`

## example

```js
endsWith("Hello World!", "World!"); // true
endsWith("Hello World!", "World"); // false
endsWith("Hello World!", "Hello", 5); // true
endsWith("Hello World!", /World!/); // true
endsWith("Hello World!", /World/); // false
endsWith("Hello World!", /Hello/, 5); // true
```
