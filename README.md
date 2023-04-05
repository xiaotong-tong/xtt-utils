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

### Typescript

为了正确引入 typescript 类型，可能需要安装 4.7 以上版本的 typescript。
且需要在 `tsconfig.json` 中配置 `moduleResolution` 为 `node16`

## docs

可以查看 docs 文件夹内的 md 文档 [Docs](./docs/api/api.md)

或者访问该 [网页](https://xiaotong-tong.github.io/xtt-utils-docs/index.html)
