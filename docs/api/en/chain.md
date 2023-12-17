# chain

Open a chainable sequence of methods. This sequence can be used to apply a sequence of methods to the wrapped object.
Must be terminated by value() method to retrieve the final value.

## params

-   [self=this] (object): The object of chainable sequence, default is this.
-   [?initValue] (\*): The initial value, which will be passed as the first parameter in the next call to the chainable method.

If only one parameter is passed in and the parameter is not an object, the parameter will be used as the initValue value. If an object is passed in, the object will be used as the self value.

## returns

-   (Proxy): The proxy object

## example

```js
chain(xttUtils, "Hello World!")
	.reverse()
	.reverse()
	.getTermRight(" ")
	.endsWith("World")
	.value(); // true

xttUtils
	.chain("Hello World!")
	.reverse()
	.reverse()
	.getTermRight(" ")
	.endsWith("World")
	.value(); // true
```
