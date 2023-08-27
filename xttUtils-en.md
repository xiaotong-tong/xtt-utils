# xttUtils

## random Methods

### random

Generate a random integer between min and max (inclusive of min and max).

#### note

If max is greater than Number.MAX_SAFE_INTEGER, it will return an integer between min and Number.MAX_SAFE_INTEGER

If min is less than Number.MIN_SAFE_INTEGER, it will return an integer between Number.MIN_SAFE_INTEGER and max

> Number.MAX_SAFE_INTEGER = 9007199254740991 = 2^53 - 1
>
> Number.MIN_SAFE_INTEGER = -9007199254740991 = -(2^53 - 1)

#### params

-   [min=1] (number)：minimum value
-   [max=100] (number)：maximum value

If no parameters are passed, an integer between 1 and 100 (inclusive of 0 and 100) is returned.

If one parameter is included, an integer between 1 and the parameter (inclusive of 1 and max) is returned.

If two parameters are included, an integer between min and max (inclusive of min and max) is returned.

#### returns

-   (number)：random integer between min and max (inclusive of min and max).

#### example

```js
random(1, 10); // 1 - 10
random(10); // 1 - 10
random(); // 1 - 100
random(-Infinity, Infinity); // -9007199254740991 - 9007199254740991
```

### randomList

Generate a random number list

#### params

-   [min=1] (number)：minimum value
-   [max=10] (number)：maximum value
-   [number|option] (object)：configuration item, if it is a number, it means the number of list items
    -   [option.count=max-min+1] (number)：number of list items
    -   [option.unique=false] (boolean)：Whether the numbers in the list are unique

min and max parameters are consistent with the [random](./random.md) method. (except for the default value)

#### returns

-   (number[])：A random number list of length count, each of which is between min and max

#### example

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

### weightedRandom

Get a random item from a list of random numbers based on the weight list.

#### params

-   randomList (any[] | Object<string,number>)：The list of random numbers, when randomList is Object, the weight list will be ignored, the key of Object is the list of random numbers, and the value is the weight list

-   [weightList] (number[]): The weight list, the length of the weight list must be the same as the length of the random number list, and the sum of the weight list must be greater than 1

#### returns

-   (any)：A random item from the random number list

#### example

```js
weightedRandom([1, 2, 3], [4, 5, 6]); // 4/15 probability to get 1, 5/15 probability to get 2, 6/15 probability to get 3
weightedRandom({ 1: 4, 2: 5, 3: 6 }); // ditto
```

### randomHexColor

Generates a random hexadecimal color value

#### params

-   [options] (object)：config options
    -   [alpha=false] (boolean)：whether to include the alpha channel, default is false

#### returns

-   (string)：hexadecimal color value

#### example

```js
randomHexColor(); // #e672ac
randomHexColor({ alpha: true }); // #8b346ae5
```

## string Methods

### reverse

Returns the reverse of a string.

#### params

-   str (string)：The string to be reversed

#### returns

-   (string)：The reversed string

#### example

```js
reverse("hello"); // 'olleh'
reverse(""); // ''
```

### startsWith

Determines whether a string begins with the specified string or regular expression matching string

#### params

-   str (string)：The string to be judged

-   prefix (string | RegExp)：The string or regular expression to be judged

-   [startPosition] (number)：The position to start the judgment

#### returns

-   (boolean)：Returns `true` if the string begins with the specified string or a string matched by a regular expression, otherwise returns `false`

#### example

```js
startsWith("Hello World!", "Hello"); // true
startsWith("Hello World!", "World"); // false
startsWith("Hello World!", "World", 6); // true
startsWith("Hello World!", /Hello/); // true
startsWith("Hello World!", /World/); // false
startsWith("Hello World!", /World/, 6); // true
```

### endsWith

Determines whether a string ends with a specified string or a string matched by a regular expression

#### params

-   str (string)：The string to be judged

-   suffix (string | RegExp)：The string or regular expression to be judged

-   [endPosition] (number)：The position to end the judgment

#### returns

-   (boolean)：Returns `true` if the string ends with a specified string or a string matched by a regular expression, otherwise returns `false`

#### example

```js
endsWith("Hello World!", "World!"); // true
endsWith("Hello World!", "World"); // false
endsWith("Hello World!", "Hello", 5); // true
endsWith("Hello World!", /World!/); // true
endsWith("Hello World!", /World/); // false
endsWith("Hello World!", /Hello/, 5); // true
```

### getTermLeft

获取字符串中匹配项左侧的字符串

#### params

-   str (string)：要获取的字符串

-   searchTerm (string | RegExp)：要匹配的字符串或正则表达式

-   [beforeWhichTimes=1] (number)：匹配到几次后停止，默认为 1, 如果数字大于匹配到的次数，则返回最后一个匹配项左侧的字符串

#### returns

-   (string)：返回匹配项左侧的字符串

#### example

```js
getTermLeft("abcde", "c"); // "ab"
getTermLeft("abcde", "c", 2); // "ab"
getTermLeft("abcdec", "c", 2); // "abcde"
getTermLeft("abc1de2", /\d/); // "abc"
getTermLeft("abc1de2", /\d/, 2); // "abc1de"
getTermLeft("abc1de2", /\d/, 3); // "abc1de"
```

### getTermRight

Get the string on the right of the matching item in the string

#### params

-   str (string)：The string to get

-   searchTerm (string | RegExp)：The string or regular expression to match

-   [beforeWhichTimes=1] (number)：Stop after matching several times, the default is 1, if the number is greater than the number of matches, the string to the right of the last match is returned, if you want to take the first matching item from the right, you can pass in -1

#### returns

-   (string)：Returns the string on the right of the matching item

#### example

```js
getTermRight("abcde", "c"); // "de"
getTermRight("abcde", "c", 2); // "de"
getTermRight("abcdec", "c", 2); // ""
getTermRight("abc1de2", /\d/); // "de2"
getTermRight("abc1de2", /\d/, 2); // ""
getTermRight("abc1de2", /\d/, 3); // ""
```

### getRangeByTerm

Get the string in a range of strings

#### params

-   str (string)：The string to be processed
-   term ([string | RegExp, string | RegExp])：The string or regular expression range to be matched

#### returns

-   (string)：Returns the string in the matching range

#### example

```js
getRangeByTerm("abcde", ["b", "d"]); // "c"
getRangeByTerm("abcde", ["d", "b"]); // "c"
getRangeByTerm("a1bcd2e", [/\d/, /\d/]); // "bcd"
```

### charToCodePoint

Returns the Unicode code point of a string.

#### params

-   str (string)：The string to be converted
-   [options] (Object)：Optional parameters
    -   [separator=""] (string)：separator
    -   [base=16] (2 | 8 | 10 | 16)：base

#### returns

-   (string)：Unicode code point

#### example

```js
charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
charToCodePoint("Hello World!", { separator: " " }); // "0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
charToCodePoint("Hello World!", { base: 2, separator: " " }); // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
```

### trimLineStart

Delete the spaces before the line, keep the indentation level, if it is multiple lines, then delete the minimum number of common spaces for all lines

#### params

-   str (string)：Convert the string
-   options(object): configuration item
    -   removeFirstEmptyLine (boolean)：Whether to delete the empty line of the first line. The default value is false
    -   removeLastEmptyLine (boolean)：Whether to delete the empty line of the last line. The default value is false

#### returns

-   (string)：Returns the string after deleting the spaces before the line format

#### example

```js
trimLineStart("  123"); // "123"
trimLineStart("  123\n  456"); // "123\n456"
trimLineStart("  123\n    456"); // "123\n  456"
```

### strToNum

string to number

#### params

-   text (string)：The string to convert.

#### returns

-   (number)：The converted number.

#### example

```js
strToNum("123"); // 123
strToNum("123.456"); // 123.456
strToNum("123.456.789"); // 123.456789
strToNum("fdsf12fd3.4fsdf56.7fds89"); // 123.456789
strToNum("-fdsf12fd3.4fsdf56.7fds89"); // -123.456789
```

## array Methods

### shuffle

Shuffle an array

#### params

-   list (array): The array to shuffle

#### returns

-   (array): Returns the new shuffled array

#### example

```js
shuffle([1, 2, 3, 4, 5]); // [2, 4, 1, 3, 5]
```

### range

Create an array of numbers in the range [start, end] with step.

#### params

-   [start=0] (number): Start of range
-   [end=0] (number): End of range
-   [step] (number): The value to increment or decrement by.

If only one argument is provided a range from 0 to start is created. start < 0 when step defaults to -1, start > 0 when step defaults to 1.

If two arguments are provided a range from start to end is created. start < end when step defaults to 1, start > end when step defaults to -1.

#### returns

-   (Array): Returns the range of numbers.

#### example

```js
range(10); // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// the same as range(0, 10) or range(0, 10, 1)

range(-10); // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
// the same as range(0, -10) or range(0, -10, -1)

range(1, 10, 7); // => [1, 8]
range(1, -10, -3); // => [1, -2, -5, -8]
```

## number Methods

### conversionBase

Converts a number to a string of the specified base.

#### params

| name      | type               | default | description              |
| --------- | ------------------ | ------- | ------------------------ |
| num       | number             | -       | The number to convert.   |
| base      | 2 \| 8 \| 10 \| 16 | 10      | The base to convert to.  |
| hasPrefix | boolean            | true    | Whether to add a prefix. |

If hasPrefix is true, when base is 2, the prefix of the return value is '0b'; when base is 8, the prefix of the return value is '0o'; when base is 16, the prefix of the return value is '0x'; when base is 10 or other values, the prefix is not added.

When num is NaN, or converted to NaN after type conversion, it will be treated as 0.

#### returns

-   (string)：The converted string.

#### example

```js
conversionBase(10, 2); // -> '0b1010'
conversionBase(0xa); // -> '10'
conversionBase(10, 2, false); // -> "1010"
conversionBase(-10, 2); // -> "-0b1010"
```

### thousandth

Converts a number to a thousandth format

#### params

-   num (number): The number to convert
-   [maximumFractionDigits=20] (number): The maximum number of digits after the decimal point

#### returns

-   (string): The converted string with thousandth format

#### example

```js
thousandth(1000000); // "1,000,000"
thousandth(1000000.1234); // "1,000,000.1234"
thousandth(1000000.1234, 2); // "1,000,000.12"
```

#### references

-   MDN [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

### sum

Sum up.

#### params

-   values (...Array): The array or parameter list to sum up.

#### returns

-   (number): The sum.

#### example

```js
sum([1, 2, 3, 4, 5]); // 15
sum(1, 2, 3, 4, 5); // 15
```

## file Methods

### toB64

Convert input to base64 string.

> warning
>
> This functino is supported in browser environment only when input is `File` or `Blob`.
> Not supported in node.js environment. Because `FileReader` is not a global object in node.js.

#### params

-   input (File | Blob | string | number): input

#### returns

-   (Promise<string>): promise of the base64 string

#### examples

```javascript
toB64("hello world"); // "aGVsbG8gd29ybGQ="
```

### dataUrlToBlob

Convert data url string to Blob object

#### params

-   data (string)：data url string

#### returns

-   (Promise<Blob>)：promise of Blob object

#### notes

Usesd `fetch` API, so compatibility should be considered when using in node.js environment. `fetch` API is supported in node.js v18.0.0 and above.

See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

### toDataUrl

Convert input to data url string

> warning
>
> This functino is supported in browser environment only when input is `File` or `Blob`.
> Not supported in node.js environment. Because `FileReader` is not a global object in node.js.

#### params

-   input (File | Blob | string | number): input
-   [options] (object): optional
    -   [options.mimeType="text/plain"] (string): specify the mime type of data url
    -   [options.base64=true] (boolean): whether to return base64 string

#### returns

-   (Promise<string>): promise of the data url string

#### examples

```javascript
toDataUrl("hello world"); // "data:text/plain;base64,aGVsbG8gd29ybGQ="
toDataUrl("hello world", { base64: false }); // "data:text/plain,hello world"
toDataUrl("hello world", { mime: "text/html" }); // "data:text/html;base64,aGVsbG8gd29ybGQ="
```

## function Methods

### fori

Loop execution function.

#### params

-   collection (\*): The target to be looped through.
-   iteratee (Iteratee): The function to be executed on each iteration of the loop.
-   options (object): The options for the loop.
-   options.thisArg (object): The value of `this` in the iteratee function.
-   options.asyncIterator (boolean): Whether the target is an async iterator.

Iteratee:

-   iterator (\*): The value of the current iteration.
-   i (number): The index of the current iteration.
-   target (\_): The target of the current iteration. If the target is an object, this value is Object.entries(\_).

#### returns

-   (Array | Promise\<Array>): Returns the results of the loop. If the target is an async iterator, the return value is a Promise.

### throttle

Throttle function.

When the function is called, if it is in an idle state, the function is executed immediately and enters a waiting state. If the function is called again during the waiting time, the current call value is saved until the waiting time ends. If the function is called multiple times, the last call value will overwrite the previous call values. After the waiting time ends, if there is a saved call value, the function is executed and enters a waiting state again. If there is no saved call value, it enters an idle state and waits for the next call.

#### params

-   func (function): The function to be throttled.
-   delay (number): The waiting time.

#### returns

-   (function): The throttled function.

#### example

```js
// 1 2 3 4 5 6 7 8 9 10
throttle((a) => console.log(a), 3000);
// If triggered every 0.9 seconds
// 1 4 7 10
// Trigger 1 at 0.9 seconds, execute immediately;
// Trigger 2 after 1.8 seconds, wait;
// Trigger 3 after 2.7 seconds, wait;
// Trigger 4 after 3.6 seconds, wait;
// When the waiting time ends at 3.9 seconds, run the last call and output 4;
// Trigger 5 after 4.5 seconds, wait
// ...
```

### chain

Open a chainable sequence of methods. This sequence can be used to apply a sequence of methods to the wrapped object.
Must be terminated by value() method to retrieve the final value.

#### params

-   [self=this] (object): The object of chainable sequence, default is this.
-   [?initValue] (\*): The initial value, which will be passed as the first parameter in the next call to the chainable method.

If only one parameter is passed in and the parameter is not an object, the parameter will be used as the initValue value. If an object is passed in, the object will be used as the self value.

#### returns

-   (Proxy): The proxy object

#### example

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

### compose

Compose functions from right to left.

#### params

-   fns (...Function): All functions to compose must be single-parameter functions, and the last function can be a multi-parameter function

#### returns

-   (Function): The function after composition

#### example

```js
const _ = xttUtils.curry.placeholder;
const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);
compose(isEndsWith, getTermRight)("Hello World!"); // true
```

### curry

Curry a function

If you want to use placeholder, please use `curry.placeholder` property

#### params

-   fn (Function): The function to curry
-   [args] (...any)：The arguments to curry

#### returns

-   (Function | any)：Curried function, if the parameters are enough, return the result of the function execution

#### example

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

## date Methods

### formatDate

Format date

> This function is only for simple processing. If you need more complex formatting, it is recommended to use [day.js](https://day.js.org/en/)

#### params

-   date (Date|string|number): Date
-   format (string|object): Format string or format options
    -   format (string): Format string, default is 'YYYY-MM-DD hh:mm:ss', available values refer to the format list below
    -   lang (string): Language, default is 'en'

#### returns

-   (string|Function): Formatted date

If only the date parameter is passed, it returns a partially applied function with a fixed date. The format parameter can be passed in later, which can be used to format the same date multiple times. If the format parameter is passed in during the initial call, the formatted date is returned directly.

#### example

```js
formatDate("2023-01-01", "YYYY-MM-DD hh:mm:ss"); // => '2023-01-01 00:00:00'
formatDate("2023-01-01")("[YYYYMD]YYYY-M-D h:m:s"); // => 'YYYYMD2023-1-1 0:0:0'
formatDate("2023-01-01", "dddd"); // => 'Sunday'
formatDate("2023-01-01", { format: "dddd", lang: "zh-CN" }); // => '星期日'
```

##### format

Supported format placeholders:

| Placeholder | Output          | Details                                |
| ----------- | --------------- | -------------------------------------- |
| YY          | 23              | Two-digit year                         |
| YYYY        | 2023            | Four-digit year                        |
| M           | 1-12            | Month                                  |
| MM          | 01-12           | Month, formatted to two digits         |
| D           | 1-31            | Date                                   |
| DD          | 01-31           | Date, formatted to two digits          |
| h           | 0-23            | Hour                                   |
| hh          | 00-23           | Hour, formatted to two digits          |
| m           | 0-59            | Minute                                 |
| mm          | 00-59           | Minute, formatted to two digits        |
| s           | 0-59            | Second                                 |
| ss          | 00-59           | Second, formatted to two digits        |
| SSS         | 000-999         | Millisecond, formatted to three digits |
| d           | 0-6             | Weekday, 0 represents Sunday           |
| dd          | S-S             | Weekday, shortest form                 |
| ddd         | Sun-Sat         | Weekday, short form                    |
| dddd        | Sunday-Saturday | Weekday, long form                     |

> The dd, ddd, and dddd options require the lang parameter to be passed in to take effect. The default is 'en'.
> The value is the weekday option in Intl.DateTimeFormat.
> dd -> narrow, ddd -> >short, dddd -> long

**weekday values**

| lang | format | Mon    | Tue     | Wed       | Thu      | Fri    | Sat      | Sun    |
| ---- | ------ | ------ | ------- | --------- | -------- | ------ | -------- | ------ |
| en   | d      | 1      | 2       | 3         | 4        | 5      | 6        | 0      |
| en   | dd     | M      | T       | W         | T        | F      | S        | S      |
| en   | ddd    | Mon    | Tue     | Wed       | Thu      | Fri    | Sat      | Sun    |
| en   | dddd   | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |
| zh   | d      | 1      | 2       | 3         | 4        | 5      | 6        | 0      |
| zh   | dd     | 一     | 二      | 三        | 四       | 五     | 六       | 日     |
| zh   | ddd    | 周一   | 周二    | 周三      | 周四     | 周五   | 周六     | 周日   |
| zh   | dddd   | 星期一 | 星期二  | 星期三    | 星期四   | 星期五 | 星期六   | 星期日 |

#### references

-   MDN [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

## html Methods

### css

Set or get the style of an element

#### get

##### params

| param   | type        | default | description |
| ------- | ----------- | ------- | ----------- |
| element | HTMLElement | -       | element     |
| styles  | string      | -       | style name  |

##### returns

-   (string): style value

#### set

##### params

| param   | type             | default | description |
| ------- | ---------------- | ------- | ----------- |
| element | HTMLElement      | -       | element     |
| styles  | string \| object | -       | style name  |
| value   | string           | -       | style value |

If element and styles are passed in as object types, multiple styles of the element are set at the same time

If element and styles are passed in as string types and value is passed in as string types, the style of the element is set

##### returns

-   (HTMLElement): element

#### notes

If the element passed in is not of type HTMLElement, a TypeError will be thrown

#### example

```js
css(document.body, "font-size", "16px"); // -> document.body
css(document.body, "font-size"); // -> 16px
css(document.body, {
	fontSize: "16px",
	color: "red"
}); // -> document.body
```

