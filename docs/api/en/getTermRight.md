# getTermRight

Get the string on the right of the matching item in the string

## params

-   str (string)：The string to get

-   searchTerm (string | RegExp)：The string or regular expression to match

-   [beforeWhichTimes=1] (number)：Stop after matching several times, the default is 1, if the number is greater than the number of matches, the string to the right of the last match is returned, if you want to take the first matching item from the right, you can pass in -1

## returns

-   (string)：Returns the string on the right of the matching item

## example

```js
getTermRight("abcde", "c"); // "de"
getTermRight("abcde", "c", 2); // "de"
getTermRight("abcdec", "c", 2); // ""
getTermRight("abc1de2", /\d/); // "de2"
getTermRight("abc1de2", /\d/, 2); // ""
getTermRight("abc1de2", /\d/, 3); // ""
```
