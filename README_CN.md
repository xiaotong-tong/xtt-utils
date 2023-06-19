# xtt-utils

xtt-utils 是一个工具库，包含了一些常用的 js 工具函数。

## 国际化

[简体中文](./README_CN.md) |
[English](./README.md)

## 安装

```bash
npm i xtt-utils
```

## 使用

### browser

```html
<script src="../xtt-utils/dist/index.min.js"></script>
<!-- 导入后会在 window 上注册 xttUtils 全局变量 -->
<script>
	console.log(xttUtils.random());
</script>
```

### module

```javascript
// 整体引入
import xttUtils from "xtt-utils";
xttUtils.random();

// 按需引入
import { random } from "xtt-utils"; // 推荐写法
// 或者
import { random } from "xtt-utils/random/random";
random();
```

### commonjs

```javascript
// 整体引入
const xttUtils = require("xtt-utils");
xttUtils.random();

// 按需引入
const { random } = require("xtt-utils");
// 或者
const { random } = require("xtt-utils/random/random");
random();
```

## docs

可以查看 docs 文件夹内的 md 文档 [Docs](./docs/api/cn/api.md)

或者访问该 [xtt-utils 文档网页](https://xiaotong-tong.github.io/xtt-utils/)
