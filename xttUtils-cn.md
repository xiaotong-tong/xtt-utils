# xttUtils

## random

返回一个介于 min 和 max 之间的整数 (包含 min 和 max)。

### note

如果 max 大于 Number.MAX_SAFE_INTEGER，会返回一个介于 min 和 Number.MAX_SAFE_INTEGER 之间的整数

如果 min 小于 Number.MIN_SAFE_INTEGER，会返回一个介于 Number.MIN_SAFE_INTEGER 和 max 之间的整数

> Number.MAX_SAFE_INTEGER = 9007199254740991 = 2^53 - 1
>
> Number.MIN_SAFE_INTEGER = -9007199254740991 = -(2^53 - 1)

### params

-   [min=1] (number) (可选)：最小值
-   [max=100] (number) (可选)：最大值

如果不传递参数，返回一个介于 1 和 100 之间的整数 (包含 0 和 100)。

如果包含一个参数，则返回一个介于 1 和参数之间的整数 (包含 1 和 max)。

如果包含两个参数，则返回一个介于 min 和 max 之间的整数 (包含 min 和 max)。

### returns

-   (number)：介于 min 和 max 之间的随机整数 (包含 min 和 max)。

### example

```js
random(1, 10); // 1 - 10
random(10); // 1 - 10
random(); // 1 - 100
random(-Infinity, Infinity); // -9007199254740991 - 9007199254740991
```

## randomList

生成一个随机数列表

### params

-   [min=1] (number)：最小值
-   [max=10] (number)：最大值
-   [number|option] (object)：配置项, 如果是数字，则表示列表个数
    -   [option.count=max-min+1] (number)：列表个数
    -   [option.unique=false] (boolean)：列表中的数是否唯一

min 和 max 参数与 [random](./random.md) 方法一致。(默认值除外)

### returns

-   (number[])：每项均介于 min 和 max 之间的 length 为 count 的随机数列表

### example

```js
randomList(1, 10); // [4, 2, 3, 7, 4, 2, 8, 9, 4, 1]
randomList(1, 10, 5); // [8, 9, 10, 8, 10]
randomList(1, 10, 10); // [3, 5, 4, 1, 10, 7, 6, 9, 4, 10]
randomList(1, 10, {
	unique: false
}); // [10, 6, 4, 1, 3, 1, 9, 6, 4, 1]

randomList(1, 10, {
	count: 5,
	unique: true
}); // [ 1, 6, 9, 2, 8 ]
randomList(1, 10, {
	count: 10,
	unique: true
}); // [2, 10, 6, 4, 7, 9,  5, 8, 1, 3]
randomList(1, 10, {
	unique: true
}); // [4, 8, 10, 6, 1,5, 2,  7, 9, 3]
```

## weightedRandom

获取权重随机数

### params

-   randomList (any[] | Object<string,number>)：随机数列表。
    当 randomList 为 Object 时，权重列表将被忽略，Object 的 key 为随机数列表，value 为权重列表
-   [weightList] (number[])：权重列表

### returns

-   (any)：随机数列表中的某一项

### example

```js
weightedRandom([1, 2, 3], [4, 5, 6]); // 4/15 的概率返回 1，5/15 的概率返回 2，6/15 的概率返回 3
weightedRandom({ 1: 4, 2: 5, 3: 6 }); // 同上
```

## randomHexColor

生成一个随机的十六进制颜色值

### params

-   [options] (object)：配置项
    -   [alpha=false] (boolean)：是否包含透明度通道，默认为 false

### returns

-   (string)：十六进制颜色值

### example

```js
randomHexColor(); // #e672ac
randomHexColor({ alpha: true }); // #8b346ae5
```

## generateSudoku

生成一个数独游戏初始化盘面

### params

-   [square=44] (number): 提供数字的个数

### returns

-   (number[][])：数独游戏初始数据

### example

```js
generateSudoku();
// ->
// [
// 	[1, 4, 6, 5, 0, 0, 0, 0, 3],
// 	[0, 0, 2, 6, 0, 0, 0, 9, 0],
// 	[9, 0, 0, 0, 0, 0, 0, 6, 5],
// 	[0, 6, 9, 7, 5, 2, 0, 3, 0],
// 	[5, 0, 0, 3, 6, 1, 0, 8, 0],
// 	[0, 0, 1, 9, 0, 4, 0, 7, 0],
// 	[0, 2, 3, 0, 1, 0, 9, 5, 0],
// 	[0, 9, 8, 2, 3, 5, 6, 0, 7],
// 	[0, 0, 5, 8, 7, 9, 0, 4, 2]
// ];
```

## generateSudokuBoard

生成一个数独终盘

### returns

-   (number[][])：数独终盘

### example

```js
generateSudokuBoard();
// ->
// [
// 	[7, 1, 5, 3, 4, 2, 9, 8, 6],
// 	[6, 3, 8, 9, 5, 1, 4, 2, 7],
// 	[9, 4, 2, 7, 8, 6, 5, 1, 3],
// 	[5, 8, 4, 6, 1, 3, 7, 9, 2],
// 	[3, 7, 1, 8, 2, 9, 6, 5, 4],
// 	[2, 9, 6, 5, 7, 4, 8, 3, 1],
// 	[1, 5, 9, 2, 6, 7, 3, 4, 8],
// 	[8, 2, 7, 4, 3, 5, 1, 6, 9],
// 	[4, 6, 3, 1, 9, 8, 2, 7, 5]
// ];
```

## isValidSudokuBoard

验证一个数独终盘是否合法

### params

-   [board] (number[][]): 数独终盘

### returns

-   (boolean)：是否合法

### example

```js
isValidSudokuBoard([
	[7, 1, 5, 3, 4, 2, 9, 8, 6],
	[6, 3, 8, 9, 5, 1, 4, 2, 7],
	[9, 4, 2, 7, 8, 6, 5, 1, 3],
	[5, 8, 4, 6, 1, 3, 7, 9, 2],
	[3, 7, 1, 8, 2, 9, 6, 5, 4],
	[2, 9, 6, 5, 7, 4, 8, 3, 1],
	[1, 5, 9, 2, 6, 7, 3, 4, 8],
	[8, 2, 7, 4, 3, 5, 1, 6, 9],
	[4, 6, 3, 1, 9, 8, 2, 7, 5]
]); // -> true
```

## reverse

返回一个字符串的反转字符串。

### params

-   str (string)：要反转的字符串

### returns

-   (string)：反转后的字符串

### example

```js
reverse("hello"); // 'olleh'
reverse(""); // ''
```

## startsWith

判断字符串是否以指定的字符串或正则表达式匹配的字符串开头

### params

-   str (string)：要判断的字符串

-   prefix (string | RegExp)：要判断的字符串或正则表达式

-   [position] (number)：开始判断的位置

### returns

-   (boolean)：如果字符串以指定的字符串或正则表达式匹配的字符串开头，则返回 `true`，否则返回 `false`

### example

```js
startsWith("Hello World!", "Hello"); // true
startsWith("Hello World!", "World"); // false
startsWith("Hello World!", "World", 6); // true
startsWith("Hello World!", /Hello/); // true
startsWith("Hello World!", /World/); // false
startsWith("Hello World!", /World/, 6); // true
```

## endsWith

判断字符串是否以指定的字符串或正则表达式匹配的字符串结尾

### params

-   str (string)：要判断的字符串

-   suffix (string | RegExp)：要判断的字符串或正则表达式

-   [endPosition] (number)：结束判断的位置

### returns

-   (boolean)：如果字符串以指定的字符串或正则表达式匹配的字符串结尾，则返回 `true`，否则返回 `false`

### example

```js
endsWith("Hello World!", "World!"); // true
endsWith("Hello World!", "World"); // false
endsWith("Hello World!", "Hello", 5); // true
endsWith("Hello World!", /World!/); // true
endsWith("Hello World!", /World/); // false
endsWith("Hello World!", /Hello/, 5); // true
```

## getTermLeft

Get the string to the left of the matching item in the string

### params

-   str (string)：The string to get

-   searchTerm (string | RegExp)：The string or regular expression to match

-   [beforeWhichTimes=1] (number)：Stop after matching several times, the default is 1, if the number is greater than the number of matches, the string to the left of the last match is returned

### returns

-   (string)：Returns the string to the left of the matching item

### example

```js
getTermLeft("abcde", "c"); // "ab"
getTermLeft("abcde", "c", 2); // "ab"
getTermLeft("abcdec", "c", 2); // "abcde"
getTermLeft("abc1de2", /\d/); // "abc"
getTermLeft("abc1de2", /\d/, 2); // "abc1de"
getTermLeft("abc1de2", /\d/, 3); // "abc1de"
```

## getTermRight

获取字符串中匹配项右侧的字符串

### params

-   str (string)：要获取的字符串

-   searchTerm (string | RegExp)：要匹配的字符串或正则表达式

-   [beforeWhichTimes=1] (number)：匹配到几次后停止，默认为 1, 如果数字大于匹配到的次数，则返回最后一个匹配项右侧的字符串，如果想取右侧开始第一个匹配项，可以传入 -1

### returns

-   (string)：返回匹配项右侧的字符串

### example

```js
getTermRight("abcde", "c"); // "de"
getTermRight("abcde", "c", 2); // "de"
getTermRight("abcdec", "c", 2); // ""
getTermRight("abc1de2", /\d/); // "de2"
getTermRight("abc1de2", /\d/, 2); // ""
getTermRight("abc1de2", /\d/, 3); // ""
```

## getRangeByTerm

获取字符串中某个范围内的字符串

### params

-   str (string)：要处理的字符串
-   term ([string | RegExp, string | RegExp])：要匹配的字符串或正则表达式范围

### returns

-   (string)：返回匹配范围内的字符串

### example

```js
getRangeByTerm("abcde", ["b", "d"]); // "c"
getRangeByTerm("abcde", ["d", "b"]); // "c"
getRangeByTerm("a1bcd2e", [/\d/, /\d/]); // "bcd"
```

## charToCodePoint

返回一个字符串的 Unicode 编码点。

### params

-   str (string)：要转换的字符串
-   [options] (Object)：可选参数
    -   [separator=""] (string)：分隔符
    -   [base=16] (2 | 8 | 10 | 16)：进制

### returns

-   (string)：Unicode 编码点

### example

```js
charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
charToCodePoint("Hello World!", { separator: " " }); // "0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
charToCodePoint("Hello World!", { base: 2, separator: " " }); // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
```

## trimLineStart

删除行前的空格，保留缩进层级，如果是多行，那么会删除所有行的最小共有空格数

### params

-   str (string)：要转换的字符串
-   options(object): 配置项
    -   removeFirstEmptyLine (boolean)：是否删除第一行的空行。默认值为 false
    -   removeLastEmptyLine (boolean)：是否删除最后一行的空行。默认值为 false

### returns

-   (string)：返回删除行前空格 format 后的字符串

### example

```js
trimLineStart("  123"); // "123"
trimLineStart("  123\n  456"); // "123\n456"
trimLineStart("  123\n    456"); // "123\n  456"
```

## strToNum

将字符串转换为数字

### params

-   text (string)：要转换的字符串

### returns

-   (number)：转换后的数字

### example

```js
strToNum("123"); // 123
strToNum("123.456"); // 123.456
strToNum("123.456.789"); // 123.456789
strToNum("fdsf12fd3.4fsdf56.7fds89"); // 123.456789
strToNum("-fdsf12fd3.4fsdf56.7fds89"); // -123.456789
```

## isEmail

判断字符串是否是邮箱

### params

-   email (string): 需要判断的字符串

### returns

-   (boolean): 是否是邮箱

### example

```js
isEmail("example@abc.com") => true
isEmail("abc.com") => false
isEmail("a.b.example@abc.com") => true
isEmail("a..example@abc.com") => false
```

## shuffle

乱序数组

### params

-   list (array): 需要打乱的数组

### returns

-   (array): 乱序后的数组，如果传入的参数没有 length 属性或者 length 为 0，返回空数组

### example

```js
shuffle([1, 2, 3, 4, 5]); // [2, 4, 1, 3, 5]
```

## range

创建一个包含从 start 到 end 范围数字的数组（包含 end 本身）。

### params

-   [start=0] (number): 开始的数字
-   [end=0] (number): 结束的数字
-   [step] (number): 步长

如果只传一个参数，则创建一个从 0 到 start 范围数字的数组（包含 start 本身）。start 小于 0 时，step 默认为 -1, start 大于 0 时，step 默认为 1。

如果包含两个参数，则创建一个从 start 到 end 范围数字的数组（包含 end 本身）。start 小于 end 时，step 默认为 1, start 大于 end 时，step 默认为 -1。

### returns

-   (Array): 返回一个包含从 start 到 end 范围数字的数组（包含 end 本身）。

### example

```js
range(10); // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 相当于 range(0, 10) 或 range(0, 10, 1)

range(-10); // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
// 相当于 range(0, -10) 或 range(0, -10, -1)

range(1, 10, 7); // => [1, 8]
range(1, -10, -3); // => [1, -2, -5, -8]
```

## conversionBase

将数字转换为指定进制的字符串

### params

| 参数      | 类型               | 默认值 | 描述         |
| --------- | ------------------ | ------ | ------------ |
| num       | number             | -      | 要转换的数字 |
| base      | 2 \| 8 \| 10 \| 16 | 10     | 进制         |
| hasPrefix | boolean            | true   | 是否添加前缀 |

如果 hasPrefix 为 true，当 base 为 2 时，返回值前缀为 '0b'；当 base 为 8 时，返回值前缀为 '0o'；当 base 为 16 时，返回值前缀为 '0x'；当 base 为 10 或其它值时，则不添加前缀。

当 num 为 NaN, 或类型转换后为 NaN 时，后续会当成 0 处理。

### returns

-   (string)：转换后的字符串

### example

```js
conversionBase(10, 2); // -> '0b1010'
conversionBase(0xa); // -> '10'
conversionBase(10, 2, false); // -> "1010"
conversionBase(-10, 2); // -> "-0b1010"
```

## thousandth

将数字转换为千分位格式

### params

-   num (number): 要转换的数字
-   [maximumFractionDigits=20] (number): 小数点后的最大位数

### returns

-   (string): 转换为千分位格式的字符串

### example

```js
thousandth(1000000); // "1,000,000"
thousandth(1000000.1234); // "1,000,000.1234"
thousandth(1000000.1234, 2); // "1,000,000.12"
```

### references

-   MDN [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

## sum

求和

### params

-   values (...Array): 需要求和的数组或参数列表

### returns

-   (number): 求和结果

### example

```js
sum([1, 2, 3, 4, 5]); // 15
sum(1, 2, 3, 4, 5); // 15
```

## toB64

将输入转换为 base64 字符串。

> warning
>
> 该函数在输入为 File 或 Blob 时仅支持浏览器环境。
> 不支持 node.js 环境，因为 `FileReader` 在 node.js 不受支持。

### params

-   input (File | Blob | string | number): 输入

### returns

-   (Promise<string>): base64 字符串的 promise

### examples

```javascript
toB64("hello world"); // "aGVsbG8gd29ybGQ="
```

## dataUrlToBlob

将 data url 字符串转换为 Blob 对象

### params

-   data (string)：data url 字符串

### returns

-   (Promise<Blob>)：一个 Blob 对象的 promise

### notes

使用了 `fetch` API，因此在 node.js 环境中使用需要考虑兼容性， node.js v18.0.0 以上版本才支持 `fetch` API。

详见: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

## toDataUrl

将输入转换为 data url 字符串

> warning
>
> 该函数在输入为 File 或 Blob 时仅支持浏览器环境。
> 不支持 node.js 环境，因为 `FileReader` 在 node.js 不受支持。

### params

-   input (File | Blob | string | number): 输入
-   [options] (object): 可选项
    -   [options.mimeType="text/plain"] (string): 指定 data url 的 mime type
    -   [options.base64=true] (boolean): 是否返回 base64 字符串

### returns

-   (Promise<string>): data url 字符串的 promise

### examples

```javascript
toDataUrl("hello world"); // "data:text/plain;base64,aGVsbG8gd29ybGQ="
toDataUrl("hello world", { base64: false }); // "data:text/plain,hello world"
toDataUrl("hello world", { mime: "text/html" }); // "data:text/html;base64,aGVsbG8gd29ybGQ="
```

## fori

循环执行函数。

### params

-   collection (\*): 要循环的目标。
-   iteratee (Iteratee): 在循环的每次迭代上执行的函数。
-   options (object): 循环的选项。
-   options.thisArg (object): iteratee 函数中的 this 的值。
-   options.asyncIterator (boolean): 目标是否为异步迭代器。

Iteratee:

-   iterator (\*): 当前迭代的值。
-   i (number): 当前迭代的索引。
-   target (\_): 当前迭代的目标。如果目标是对象，则此值为 Object.entries(\_)。

### returns

-   (Array | Promise\<Array>): 返回循环的结果。如果目标是异步迭代器，则返回值是 Promise。

## throttle

节流函数, 在调用函数时, 如果处于空闲状态, 则立即执行函数, 并进入等待状态,
在等待时间内, 如果再次调用函数, 则保存当前调用值, 直到等待时间结束,
如果多次调用函数,最后一次调用值会覆盖前面的调用值,
等待时间结束后, 如果有保存的调用值, 则执行函数, 并进入等待状态，如果没有保存的调用值, 则进入空闲状态，等待下一次调用。

### params

-   func (function)：要节流的函数
-   delay (number)：等待时间

### returns

-   (function)：节流后的函数

### example

```js
// 1 2 3 4 5 6 7 8 9 10
throttle((a) => console.log(a), 3000);
// 假如每隔 0.9 秒触发一次
// 1 4 7 10
// 0.9 秒时触发1, 立即执行;
// 1.8 秒后触发 2, 等待;
// 2.7 秒后触发 3, 等待;
// 3.6 秒后触发 4, 等待;
// 3.9 秒时等待时间结束，运行最后一次的调用，输出 4;
// 4.5 秒后触发 5, 等待
// ...
```

## chain

创建一个链式调用规则，之后可以使用链式调用的方式来操作数据。最后可以通过 value() 方法来获取最终的值。

### params

-   [self=this] (object): 需要链式调用的对象, 默认为 this 对象。
-   [?initValue] (\*): 初始值, 在下一次调用链式调用的方法时会作为第一个参数传入

如果仅传入一个参数, 且该参数不是对象, 则该参数会作为 initValue 值，如果传入的是对象，则该对象会作为 self 值

### returns

-   (Proxy): 代理对象

### example

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

## compose

组合函数 从右到左依次执行函数组合

### params

-   fns (...Function): 所有要组合的函数必须是单参数函数，最后一个函数可以是多参数函数

### returns

-   (Function): 组合后的执行函数

### example

```js
const _ = xttUtils.curry.placeholder;
const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);
compose(isEndsWith, getTermRight)("Hello World!"); // true
```

## curry

函数柯里化

如果想使用占位符,请使用 `curry.placeholder` 属性

### params

-   fn (Function)：要柯里化的函数
-   [args] (...any)：初始化的参数

### returns

-   (Function | any)：柯里化后的函数,如果参数已经足够,则返回函数执行结果

### example

```js
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
const _ = curry.placeholder;
curriedAdd(1, 2, 3); // 6
curriedAdd(1)(2, 3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1)(2)(3); // 6
curriedAdd(_, 2)(1)(3); // 6
curriedAdd(_, 2, 3)(1); // 6
curriedAdd(_, _, 3)(_, 2)(1); // 6
curry(add, 10, 20, 30, 4); // 60
```

## formatDate

格式化日期

> 该函数仅为简单处理，如果需要更复杂的格式化，建议使用 [day.js](https://day.js.org/zh-CN/)

### params

| 参数          | 类型                     | 默认值              | 描述                                           |
| ------------- | ------------------------ | ------------------- | ---------------------------------------------- |
| date          | Date \| string \| number | -                   | 日期                                           |
| format        | string \| object         | -                   | 格式化选项， 为 string 时相当于 format.format  |
| format.format | string                   | YYYY-MM-DD hh:mm:ss | 格式化字符串, 格式化标识符参考下方 format 区域 |
| format.lang   | string                   | en                  | 语言                                           |

### returns

-   (string|Function): 格式化后的日期

如果仅传入 date 参数，返回日期固定的偏函数，后续可以传入 format 参数，可以用于多次格式化同一个日期，
如果初次调用时已经传入了 format 参数，则直接返回格式化后的日期

### example

```js
formatDate("2023-01-01", "YYYY-MM-DD hh:mm:ss"); // => '2023-01-01 00:00:00'
formatDate("2023-01-01")("[YYYYMD]YYYY-M-D h:m:s"); // => 'YYYYMD2023-1-1 0:0:0'
formatDate("2023-01-01", "dddd"); // => 'Sunday'
formatDate("2023-01-01", { format: "dddd", lang: "zh-CN" }); // => '星期日'
```

#### format

支持的格式化占位符选项：

| 占位符 | 输出          | 详情                               |
| ------ | ------------- | ---------------------------------- |
| YY     | 23            | 两位数的年份                       |
| YYYY   | 2023          | 四位数的年份                       |
| M      | 1-12          | 月份                               |
| MM     | 01-12         | 月份，会格式化为两位数             |
| D      | 1-31          | 日期                               |
| DD     | 01-31         | 日期，会格式化为两位数             |
| h      | 0-12          | 小时, 十二小时制                   |
| hh     | 00-12         | 小时, 十二小时制，会格式化为两位数 |
| H      | 0-23          | 小时                               |
| HH     | 00-23         | 小时，会格式化为两位数             |
| m      | 0-59          | 分钟                               |
| mm     | 00-59         | 分钟，会格式化为两位数             |
| s      | 0-59          | 秒                                 |
| ss     | 00-59         | 秒，会格式化为两位数               |
| SSS    | 000-999       | 毫秒，会格式化为三位数             |
| d      | 0-6           | 星期几，0 代表星期日               |
| dd     | 日-六         | 星期几，最短写法                   |
| ddd    | 周日-周六     | 星期几，短写法                     |
| dddd   | 星期日-星期六 | 星期几，长写法                     |

> dd, ddd, dddd 选项需要传入 lang 参数才能生效, 默认为 'en'
> 取值为 Intl.DateTimeFormat 中的 [weekday](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) 选项
> dd -> narrow, ddd -> short, dddd -> long

**星期取值列表**

| lang | format | 星期一 | 星期二  | 星期三    | 星期四   | 星期五 | 星期六   | 星期日 |
| ---- | ------ | ------ | ------- | --------- | -------- | ------ | -------- | ------ |
| en   | d      | 1      | 2       | 3         | 4        | 5      | 6        | 0      |
| en   | dd     | M      | T       | W         | T        | F      | S        | S      |
| en   | ddd    | Mon    | Tue     | Wed       | Thu      | Fri    | Sat      | Sun    |
| en   | dddd   | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |
| zh   | d      | 1      | 2       | 3         | 4        | 5      | 6        | 0      |
| zh   | dd     | 一     | 二      | 三        | 四       | 五     | 六       | 日     |
| zh   | ddd    | 周一   | 周二    | 周三      | 周四     | 周五   | 周六     | 周日   |
| zh   | dddd   | 星期一 | 星期二  | 星期三    | 星期四   | 星期五 | 星期六   | 星期日 |

### references

-   MDN [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

## css

设置或获取元素的样式

### get

#### params

| 参数    | 类型        | 默认值 | 描述   |
| ------- | ----------- | ------ | ------ |
| element | HTMLElement | -      | 元素   |
| styles  | string      | -      | 样式名 |

#### returns

-   (string)： 样式值

### set

#### params

| 参数    | 类型             | 默认值 | 描述                             |
| ------- | ---------------- | ------ | -------------------------------- |
| element | HTMLElement      | -      | 元素                             |
| styles  | string \| object | -      | 样式名 或 样式名和样式值的键值对 |
| value   | string           | -      | 样式值                           |

如果传入 element 和 object 类型的 styles，则同时设置该元素的多个样式

如果传入 element 和 string 类型的 styles 和 string 类型的 value，则设置该元素的样式

#### returns

-   (HTMLElement)： element 元素

### notes

如果传入的 element 不是 HTMLElement 类型，则会抛出 TypeError

### example

```js
css(document.body, "font-size", "16px"); // -> document.body
css(document.body, "font-size"); // -> 16px
css(document.body, {
	fontSize: "16px",
	color: "red"
}); // -> document.body
```

