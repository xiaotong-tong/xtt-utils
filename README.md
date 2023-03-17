# xtt-utils

xtt-utils 是一个工具库，包含了一些常用的工具函数。

## 安装

暂定使用 git 或 file 安装，后续会发布到 npm 上。

### git 安装

```bash
# 安装依赖 git 安装是默认没有打包dist文件夹的，需要自己打包。
# 这里暂时使用 postinstall 脚本来运行 rollup 打包。

npm i -D rollup @rollup/plugin-typescript typescript

npm i -S github:xiaotong-tong/xtt-utils.git
```

### file 安装

```bash
# 新建 xtt-utils 文件夹，然后将 xtt-utils 仓库克隆到该文件夹下。

git clone https://github.com/xiaotong-tong/xtt-utils.git
cd xtt-utils
npm i
npm run build
# 保存 xtt-utils 目录，然后在需要使用的项目中安装。

npm i -S file:<xtt-utils> # xtt-utils 为 xtt-utils 目录的绝对路径
```

## 使用

### module

```javascript
import { random } from "xtt-utils/number/random";

random();
```

### commonjs

```javascript
const { random } = require("xtt-utils/number/random");

random();
```

### Typescript

为了正确引入 typescript 类型，需要安装 4.7 以上版本的 typescript。
且需要在 `tsconfig.json` 中配置 `moduleResolution` 为 `node16`

```typescript
import { random } from "xtt-utils/number/random";

random();
```

## API

### number

#### random

返回一个介于 min 和 max 之间的整数 (包含 min 和 max)。

##### example

```javascript
random(1, 10); // 1 - 10
random(10); // 1 - 10
random(); // 1 - 100
random(-Infinity, Infinity); // -9007199254740991 - 9007199254740991
```

详见 [random](./doc/api/number/random.md)

### string

#### reverse

返回一个字符串的反转字符串。

##### example

```javascript
reverse("hello"); // 'olleh'
reverse(""); // ''
```

详见 [reverse](./doc/api/string/reverse.md)
