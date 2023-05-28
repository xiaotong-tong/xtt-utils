# trimLineStart

Delete the spaces before the line, keep the indentation level, if it is multiple lines, then delete the minimum number of common spaces for all lines

## params

-   str (string)：Convert the string
-   options(object): configuration item
    -   removeFirstEmptyLine (boolean)：Whether to delete the empty line of the first line. The default value is false
    -   removeLastEmptyLine (boolean)：Whether to delete the empty line of the last line. The default value is false

## returns

-   (string)：Returns the string after deleting the spaces before the line format

## example

```js
trimLineStart("  123"); // "123"
trimLineStart("  123\n  456"); // "123\n456"
trimLineStart("  123\n    456"); // "123\n  456"
```
