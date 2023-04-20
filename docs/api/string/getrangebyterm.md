# getRangeByTerm

获取字符串中某个范围内的字符串

## params

-   str (string)：要处理的字符串
-   term ([string | RegExp, string | RegExp])：要匹配的字符串或正则表达式范围

## returns

-   (string)：返回匹配范围内的字符串

## example

```js
getRangeByTerm("abcde", ["b", "d"]); // "c"
getRangeByTerm("abcde", ["d", "b"]); // "c"
getRangeByTerm("a1bcd2e", [/\d/, /\d/]); // "bcd"
```
