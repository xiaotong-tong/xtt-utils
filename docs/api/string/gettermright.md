# getTermRight

获取字符串中匹配项右侧的字符串

## params

-   str (string)：要获取的字符串

-   searchTerm (string | RegExp)：要匹配的字符串或正则表达式

-   [beforeWhichTimes=1] (number)：匹配到几次后停止，默认为 1, 如果数字大于匹配到的次数，则返回最后一个匹配项右侧的字符串，如果想取右侧开始第一个匹配项，可以传入 -1

## returns

-   (string)：返回匹配项右侧的字符串

## example

```js
getTermRight("abcde", "c"); // "de"
getTermRight("abcde", "c", 2); // "de"
getTermRight("abcdec", "c", 2); // ""
getTermRight("abc1de2", /\d/); // "de2"
getTermRight("abc1de2", /\d/, 2); // ""
getTermRight("abc1de2", /\d/, 3); // ""
```
