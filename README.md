# xtt-utils

xtt-utils 是一个工具库，包含了一些常用的工具函数。

## 安装

```bash
npm i xtt-utils
```

## 使用

### module

```javascript
// 整体引入
import xttUtils from "xtt-utils";
xttUtils.random.random();

// 按需引入
import { random } from "xtt-utils/random/random";
random();
```

### commonjs

```javascript
// 整体引入
const xttUtils = require("xtt-utils");
xttUtils.random.random();

// 按需引入
const { random } = require("xtt-utils/random/random");
random();
```

### browser

```html
<script src=".../xtt-utils/dist/index.min.js"></script>
<script>
	console.log(xttUtils.random.random());
</script>
```

### Typescript

为了正确引入 typescript 类型，可能需要安装 4.7 以上版本的 typescript。
且需要在 `tsconfig.json` 中配置 `moduleResolution` 为 `node16`

## API

### random

#### [random](./docs/api/random/random.md)

返回一个介于 min 和 max 之间的整数 (包含 min 和 max)。

##### example

```javascript
random(1, 10); // 1 - 10
random(10); // 1 - 10
random(); // 1 - 100
random(-Infinity, Infinity); // -9007199254740991 - 9007199254740991
```

#### [nonDuplicateRandomList](./docs/api/random/nonDuplicateRandomList.md)

返回一个不重复的随机数列表。

##### example

```javascript
nonDuplicateRandomList(1, 10, 5); // [4, 5, 6, 7, 8]
```

#### [randomList](./docs/api/random/randomList.md)

返回一个随机数列表。

##### example

```javascript
randomList(1, 10, 5); // [8, 9, 10, 8, 10]
```

#### [weightedRandom](./docs/api/random/weightedRandom.md)

返回一个带权重的随机数。

##### example

```javascript
weightedRandom([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // 5
```

### string

#### [reverse](./docs/api/string/reverse.md)

返回一个字符串的反转字符串。

##### example

```javascript
reverse("hello"); // 'olleh'
reverse(""); // ''
```

#### [strToNum](./docs/api/string/strTonum.md)

将字符串转换为数字。

##### example

```javascript
strToNum("123"); // 123
strToNum("123.456"); // 123.456
strToNum("123.456.789"); // 123.456789
```

#### [charToCodePoint](./docs/api/string/chartocodepoint.md)

将字符转换为 Unicode 编码。

##### example

```javascript
charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
charToCodePoint("Hello World!", { base: 2, separator: " " }); // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
```

#### [startsWith](./docs/api/string/startswith.md)

判断字符串是否以指定字符串开头。

##### example

```javascript
startsWith("Hello World!", "Hello"); // true
startsWith("Hello World!", "World", 6); // true
startsWith("Hello World!", /Hello/); // true
startsWith("Hello World!", /World/, 6); // true
```

#### [endsWith](./docs/api/string/endswith.md)

判断字符串是否以指定字符串结尾。

##### example

```javascript
endsWith("Hello World!", "World!"); // true
endsWith("Hello World!", "Hello", 5); // true
endsWith("Hello World!", /World!/); // true
endsWith("Hello World!", /Hello/, 5); // true
```

### array

#### [shuffle](./docs/api/array/shuffle.md)

返回一个数组的随机排序。

##### example

```javascript
shuffle([1, 2, 3, 4, 5]); // [2, 4, 1, 5, 3]
```

### number

#### [conversionBase](./docs/api/number/conversionbase.md)

将数字转换为指定进制的字符串。

##### example

```javascript
conversionBase(10, 2); // '0b1010'
conversionBase(10, 8); // '0o12'
conversionBase(10, 16); // '0xa'
conversionBase(0xa, 10); // '10'
```
