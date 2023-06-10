# randomHexColor

生成一个随机的十六进制颜色值

## params

-   [options] (object)：配置项
    -   [alpha=false] (boolean)：是否包含透明度通道，默认为 false

## returns

-   (string)：十六进制颜色值

## example

```js
randomHexColor(); // #e672ac
randomHexColor({ alpha: true }); // #8b346ae5
```
