# xtt-utils

xtt-utils 是一个工具库，包含了一些常用的工具函数。

## 安装

```bash
npm i xtt-utils
```

## 使用

### browser

```html
<script src=".../xtt-utils/dist/index.min.js"></script>
<script>
	console.log(xttUtils.random.random());
</script>
```

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

## docs

可以查看 docs 文件夹内的 md 文档 [Docs](./docs/api/api.md)

或者访问该 [网页](https://xiaotong-tong.github.io/xtt-utils-docs/index.html)
