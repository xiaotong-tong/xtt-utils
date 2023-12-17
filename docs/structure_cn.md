# 项目目录结构

-   .github

    该目录存放 GitHub 的配置文件。

    -   workflows

        该目录存放 GitHub 的工作流配置。

-   .vscode

    该目录存放 VS Code 的配置文件。

-   docs

    该目录存放项目文档，包括说明文档、API 文档等。

    -   api

        -   cn

            -   api.md

            中文 API 文档的说明文档。

            -   \*.md

            中文 API 文档的具体文档。内部的目录结构应与 src 目录结构保持一致。但是，不包含 index.js 等汇总文件。

        -   en

            -   api.md

            英文 API 文档的说明文档。

            -   \*.md

            英文 API 文档的具体文档。内部的目录结构应与 src 目录结构保持一致。但是，不包含 index.js 等汇总文件。

        -   allToOne.cjs

            该文件用于将所有 API 文档合并为一个文件。合并的文件会保存到 pages 目录下，以便 GitHub Pages 展示。

    -   pages

        该目录存放 GitHub Pages 的文件。该目录下的文件会在 push 到 main 分支时自动打包到 gh-pages 分支, 然后通过 GitHub Pages 展示。

    -   directory.md && directory_cn.md

        该文件是项目目录结构的说明文档。

-   src

    -   \_internal

        该目录存放内部使用的工具函数。不对外暴露。

    -   \*.js

        工具函数的具体实现

    -   \*.d.ts

        工具函数的类型声明

    -   index.js

        该文件是工具函数的汇总文件。该文件会被打包为入口文件。

    -   index.d.ts

        该文件包含项目的 TypeScript 类型声明。

-   test

    该目录存放测试代码。内部的目录结构应与 src 目录结构保持一致。但是，不包含 index.js 等汇总文件。

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

-   jest-puppeteer.config.cjs

    该文件包含项目的 Jest Puppeteer 配置。

-   LICENSE

    该文件包含项目的许可证信息。

-   package.json

    该文件包含项目的 NPM 配置。

-   README.md && README_cn.md

    该文件是项目的主要说明文档，应包括项目的概述、用法示例、安装指南等。

-   rollup.config.js

    该文件包含项目的 Rollup 配置。

-   TODO.md

    该文件包含项目的待办事项。
