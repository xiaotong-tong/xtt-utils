# getRangeByTerm

Get the string in a range of strings

## params

-   str (string)：The string to be processed
-   term ([string | RegExp, string | RegExp])：The string or regular expression range to be matched

## returns

-   (string)：Returns the string in the matching range

## example

```js
getRangeByTerm("abcde", ["b", "d"]); // "c"
getRangeByTerm("abcde", ["d", "b"]); // "c"
getRangeByTerm("a1bcd2e", [/\d/, /\d/]); // "bcd"
```
