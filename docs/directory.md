# Project Directory Structure

-   .github

    This directory contains the project's GitHub configuration.

    -   workflows

        This directory contains the project's GitHub Actions workflows.

-   .vscode

    This directory contains the configuration files for VS Code.

-   docs

    This directory contains the project documentation, including the API documentation, and other documentation.

    -   api

        -   cn

            -   api.md

                This file is the documentation for the project's API.

            -   \*.md

                These files are the documentation for the project's API. The internal directory structure should be consistent with the src directory structure. However, it does not need to include summary files such as index.js.

        -   en

            -   api.md

                This file is the documentation for the project's API.

            -   \*.md

                These files are the documentation for the project's API. The internal directory structure should be consistent with the src directory structure. However, it does not need to include summary files such as index.js.

        -   allToOne.cjs

            This file is used to merge all API documentation into one file. The merged file will be saved to the pages directory for GitHub Pages to display.

    -   pages

        This directory contains the files for GitHub Pages. The files in this directory will be automatically packaged into the gh-pages branch when pushed to the main branch, and then displayed through GitHub Pages.

    -   directory.md && directory_cn.md

        This file is the documentation for the project directory structure.

-   src

    -   \_internal

        This directory contains utility functions for internal use only. It is not exposed externally.

    -   array

        This directory contains utility functions related to arrays.

    -   date

        This directory contains utility functions related to dates.

    -   file

        This directory contains utility functions related to files.

    -   function

        This directory contains utility functions related to functions.

    -   number

        This directory contains utility functions related to numbers.

    -   random

        This directory contains utility functions related to random numbers.

    -   string

        This directory contains utility functions related to strings.

    -   index.js
    -   array.js
    -   file.js
    -   function.js
    -   number.js
    -   random.js
    -   string.js

        These are summary files used to export all utility functions within a given scope.

-   test

    This directory contains test code. The internal directory structure should be consistent with the src directory structure. However, it does not need to include summary files such as index.js

-   .eslintrc.json

    This file contains the project's ESLint configuration.

-   .gitignore

    This file contains the project's Git ignore rules.

-   .npmignore

    This file contains the project's NPM ignore rules.

-   CHANGELOG.md

    This file contains the project's update log.

-   compose-dev.yaml

    This file contains the project's Docker Compose configuration for development.

-   jest.config.mjs

    This file contains the project's Jest configuration.

-   jest-puppeteer.config.mjs

    This file contains the project's Jest Puppeteer configuration.

-   LICENSE

    This file contains the project's license information.

-   package.json

    This file contains the project's NPM configuration.

-   README.md && README_cn.md

    This file is the main documentation for the project, including an overview, usage examples, installation guide, and more.

-   rollup.config.js

    This file contains the project's Rollup configuration.

-   TODO.md

    This file contains the project's to-do list.
