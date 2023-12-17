# css

设置或获取元素的样式

## get

### params

| 参数    | 类型        | 默认值 | 描述   |
| ------- | ----------- | ------ | ------ |
| element | HTMLElement | -      | 元素   |
| styles  | string      | -      | 样式名 |

### returns

-   (string)： 样式值

## set

### params

| 参数    | 类型             | 默认值 | 描述                             |
| ------- | ---------------- | ------ | -------------------------------- |
| element | HTMLElement      | -      | 元素                             |
| styles  | string \| object | -      | 样式名 或 样式名和样式值的键值对 |
| value   | string           | -      | 样式值                           |

如果传入 element 和 object 类型的 styles，则同时设置该元素的多个样式

如果传入 element 和 string 类型的 styles 和 string 类型的 value，则设置该元素的样式

### returns

-   (HTMLElement)： element 元素

## notes

如果传入的 element 不是 HTMLElement 类型，则会抛出 TypeError

## example

```js
css(document.body, "font-size", "16px"); // -> document.body
css(document.body, "font-size"); // -> 16px
css(document.body, {
	fontSize: "16px",
	color: "red"
}); // -> document.body
```
