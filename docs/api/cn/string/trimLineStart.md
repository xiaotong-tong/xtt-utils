# trimLineStart

删除行前的空格，保留缩进层级，如果是多行，那么会删除所有行的最小共有空格数

## params

-   str (string)：要转换的字符串
-   options(object): 配置项
    -   removeFirstEmptyLine (boolean)：是否删除第一行的空行。默认值为 false
    -   removeLastEmptyLine (boolean)：是否删除最后一行的空行。默认值为 false

## returns

-   (string)：返回删除行前空格 format 后的字符串

## example

```js
trimLineStart("  123"); // "123"
trimLineStart("  123\n  456"); // "123\n456"
trimLineStart("  123\n    456"); // "123\n  456"
```
