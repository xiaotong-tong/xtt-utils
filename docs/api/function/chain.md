# chain

创建一个链式调用规则，之后可以使用链式调用的方式来操作数据。最后可以通过 value() 方法来获取最终的值。

## params

-   [self=this] (object): 需要链式调用的对象, 默认为 this 对象。
-   [?initValue] (\*): 初始值, 在下一次调用链式调用的方法时会作为第一个参数传入

如果仅传入一个参数, 且该参数不是对象, 则该参数会作为 initValue 值，如果传入的是对象，则该对象会作为 self 值

## returns

-   (Proxy): 代理对象

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
