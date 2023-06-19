# xtt-utils

A JavaScript utility library.

## Internationalization

> This English document was translated with the help of GitHub Copilot.

[简体中文](./README_CN.md) |
[English](./README.md)

## Installation

```bash
npm i xtt-utils
```

## Usage

### Browser

```html
<script src="../xtt-utils/dist/index.min.js"></script>
<!-- After importing, the xttUtils global variable will be registered on the window -->
<script>
	console.log(xttUtils.random());
</script>
```

### Module

```javascript
// import the entire library
import xttUtils from "xtt-utils";
xttUtils.random();

// import specific functions
import { random } from "xtt-utils"; // Recommended
// or
import { random } from "xtt-utils/random/random";
random();
```

### CommonJS

```javascript
// import the entire library
const xttUtils = require("xtt-utils");
xttUtils.random();

// import specific functions
const { random } = require("xtt-utils");
// or
const { random } = require("xtt-utils/random/random");
random();
```

## Documentation

You can view the md documents in the docs folder [here](./docs/api/en/api.md)

Alternatively,you can visit the [xtt-utils documentation website](https://xiaotong-tong.github.io/xtt-utils/)
