# getTrimLeft

获取字符串中匹配项左侧的字符串

## params

-   str (string)：要获取的字符串

-   searchTerm (string | RegExp)：要匹配的字符串或正则表达式

-   [beforeWhichTimes=1] (number)：匹配到几次后停止，默认为 1, 如果数字大于匹配到的次数，则返回最后一个匹配项左侧的字符串

## returns

-   (string)：返回匹配项左侧的字符串

## example

```js
getTermLeft("abcde", "c"); // "ab"
getTermLeft("abcde", "c", 2); // "ab"
getTermLeft("abcdec", "c", 2); // "abcde"
getTermLeft("abc1de2", /\d/); // "abc"
getTermLeft("abc1de2", /\d/, 2); // "abc1de"
getTermLeft("abc1de2", /\d/, 3); // "abc1de"
```
