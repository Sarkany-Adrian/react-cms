### React CMS boilerplate &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# Getting started

* Follow the [getting started guide](./docs/getting-started.md) to download and run the project
* Check the [technology spec and packages](./docs/techspec-and-packages.md) used in this boilerplate
* Make sure to read [code recipes](./docs/code-recipes.md) before starting to contribute to the project

# Available commands:
1. ``` npm start ``` - start the project
2. ``` npm run build ``` - setup build
3. ``` npm run clean ``` - remove build generated files
4. ``` npm run test ``` - runs jest tests
5. ``` npm run test:coverage ``` - displays the project test coverage
6. ``` npm run lint:all ``` - checks the codebase against
linting and type checking errors

# Build and deploy
1. ``` npm install ```
2. ``` npm run build ```
3. ``` npm install --production ```
4. ``` npm prune --production ```
5. ``` pm2 startOrRestart ecosystem.config.js --env production ```

Note: The port on the server will be `3000`.

# General Notes

### Precommit hooks:
  - no linter errors are permited (PR's containing disabling of linter checks will be rejected)
  - a test coverage of 100% is required (PR's with less that 100% coverage will be rejected)


# Licence

Copyright © 2018-present Sarkany Adrian. This source code is licensed under the MIT
license found in the [LICENSE](./LICENSE.md) file.
