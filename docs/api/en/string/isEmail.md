# isEmail

Determine whether a string is an email address

## params

-   email (string): email address

## returns

-   (boolean): is email address

## example

```js
isEmail("example@abc.com") => true
isEmail("abc.com") => false
isEmail("a.b.example@abc.com") => true
isEmail("a..example@abc.com") => false
```
