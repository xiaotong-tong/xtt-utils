# 参与者指南

欢迎您参与贡献！

关于本项目的目录结构请参考 [目录结构](./structure_cn.md)

## 代码贡献

### 完整流程

1. Fork 本仓库
2. clone 你的 fork 到本地
3. 进行修改
4. push 到你的 fork
5. 提交 Pull Request
6. 等待 review 和 merge

-   本仓库使用 prettier 统一代码风格, 如果可以请在书写代码时使用 prettier 插件进行格式化

-   本仓库使用 eslint 进行代码检查, 在提交代码前请使用 `npm run eslint` 进行检查

-   本仓库使用 jest 进行单元测试, 如果你新增或修改了 src 目录下的函数文件，可以同时新增或修改 test 目录下的测试文件，然后使用 `npm run test` 进行测试

> 在提交 PR 之前请确保你的代码通过了 eslint 检查和 jest 测试，因为这些检查和测试会在 CI 中运行，如果不通过这些检测则无法通过 CI，如果合并到主分支则会导致 CI 失败

如果你新增了一个功能，如果可以请同时为这个功能编写一份良好的 jsdoc 注解，这样可以方便其他人使用这个功能，如果你不知道 jsdoc 是什么，可以参考 [jsdoc](https://jsdoc.app/)。

## 文档贡献

项目中的文档使用 markdown 编写，按照语言分为中文和英文，分别位于 docs/api/cn 和 docs/api/en 目录下，如果你想要贡献文档，可以直接修改对应的文档，然后提交 PR 即可。

文档下的目录结构同 src。