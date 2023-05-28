# getTermLeft

Get the string to the left of the matching item in the string

## params

-   str (string)：The string to get

-   searchTerm (string | RegExp)：The string or regular expression to match

-   [beforeWhichTimes=1] (number)：Stop after matching several times, the default is 1, if the number is greater than the number of matches, the string to the left of the last match is returned

## returns

-   (string)：Returns the string to the left of the matching item

## example

```js
getTermLeft("abcde", "c"); // "ab"
getTermLeft("abcde", "c", 2); // "ab"
getTermLeft("abcdec", "c", 2); // "abcde"
getTermLeft("abc1de2", /\d/); // "abc"
getTermLeft("abc1de2", /\d/, 2); // "abc1de"
getTermLeft("abc1de2", /\d/, 3); // "abc1de"
```
