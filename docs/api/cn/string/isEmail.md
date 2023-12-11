# isEmail

判断字符串是否是邮箱

## params

-   email (string): 需要判断的字符串

## returns

-   (boolean): 是否是邮箱

## example

```js
isEmail("example@abc.com") => true
isEmail("abc.com") => false
isEmail("a.b.example@abc.com") => true
isEmail("a..example@abc.com") => false
```
