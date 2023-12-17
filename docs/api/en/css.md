# css

Set or get the style of an element

## get

### params

| param   | type        | default | description |
| ------- | ----------- | ------- | ----------- |
| element | HTMLElement | -       | element     |
| styles  | string      | -       | style name  |

### returns

-   (string): style value

## set

### params

| param   | type             | default | description |
| ------- | ---------------- | ------- | ----------- |
| element | HTMLElement      | -       | element     |
| styles  | string \| object | -       | style name  |
| value   | string           | -       | style value |

If element and styles are passed in as object types, multiple styles of the element are set at the same time

If element and styles are passed in as string types and value is passed in as string types, the style of the element is set

### returns

-   (HTMLElement): element

## notes

If the element passed in is not of type HTMLElement, a TypeError will be thrown

## example

```js
css(document.body, "font-size", "16px"); // -> document.body
css(document.body, "font-size"); // -> 16px
css(document.body, {
	fontSize: "16px",
	color: "red"
}); // -> document.body
```
