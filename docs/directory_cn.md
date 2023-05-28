# 项目目录结构

-   .vscode

    该目录存放 VS Code 的配置文件。

-   docs

    该目录存放项目文档，包括说明文档、API 文档等。

    -   api

        -   api.md

            该文件是项目 API 文档的说明文档。

        该目录存放 API 文档。内部的目录结构应与 src 目录结构保持一致。但是，不需要包含 index.js 等汇总文件。

    -   directory.md

        该文件是项目目录结构的说明文档。

-   src

    -   \_internal

        该目录存放内部使用的工具函数。不对外暴露。

    -   array

        存放数组相关的工具函数。

    -   file

        存放文件相关的工具函数。

    -   function

        存放函数相关的工具函数。

    -   number

        存放数字相关的工具函数。

    -   random

        存放随机数相关的工具函数。

    -   string

        存放字符串相关的工具函数。

    -   index.js
    -   array.js
    -   file.js
    -   function.js
    -   number.js
    -   random.js
    -   string.js

        汇总文件，用于导出一个范围内的所有工具函数。

-   test

    该目录存放测试代码。内部的目录结构应与 src 目录结构保持一致。但是，不需要包含 index.js 等汇总文件。

-   .eslintrc.json

    该文件包含项目的 ESLint 配置。

-   .gitignore

    该文件包含项目的 Git 忽略规则。

-   .npmignore

    该文件包含项目的 NPM 忽略规则。

-   CHANGELOG.md

    该文件包含项目的更新日志。

-   jest.config.mjs

    该文件包含项目的 Jest 配置。

-   LICENSE

    该文件包含项目的许可证信息。

-   package.json

    该文件包含项目的 NPM 配置。

-   README.md

    该文件是项目的主要说明文档，应包括项目的概述、用法示例、安装指南等。

-   rollup.config.js

    该文件包含项目的 Rollup 配置。

-   TODO.md

    该文件包含项目的待办事项。
