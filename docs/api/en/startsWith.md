# startsWith

Determines whether a string begins with the specified string or regular expression matching string

## params

-   str (string)：The string to be judged

-   prefix (string | RegExp)：The string or regular expression to be judged

-   [startPosition] (number)：The position to start the judgment

## returns

-   (boolean)：Returns `true` if the string begins with the specified string or a string matched by a regular expression, otherwise returns `false`

## example

```js
startsWith("Hello World!", "Hello"); // true
startsWith("Hello World!", "World"); // false
startsWith("Hello World!", "World", 6); // true
startsWith("Hello World!", /Hello/); // true
startsWith("Hello World!", /World/); // false
startsWith("Hello World!", /World/, 6); // true
```
