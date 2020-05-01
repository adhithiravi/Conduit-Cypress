# realworld [![renovate-app badge][renovate-badge]][renovate-app] [![CircleCI](https://circleci.com/gh/cypress-io/cypress-example-realworld/tree/master.svg?style=svg&circle-token=f127e83138e505b26bb90ab7c0bcb60e5265fecb)](https://circleci.com/gh/cypress-io/cypress-example-realworld/tree/master) [![Coverage Status](https://coveralls.io/repos/github/cypress-io/cypress-example-realworld/badge.svg?branch=master)](https://coveralls.io/github/cypress-io/cypress-example-realworld?branch=master) [![Cypress.io Test Dashboard](https://img.shields.io/badge/cypress.io-dashboard-green.svg?style=flat-square)](https://dashboard.cypress.io/#/projects/bh5j1d)


Fork of [applitools/cypress-applitools-webinar](https://github.com/applitools/cypress-applitools-webinar) which is a fork of [gothinkster/realworld](https://github.com/gothinkster/realworld) "Conduit" blogging application.

![Application](images/app.png)

## Tests

The tests are in [cypress/integration](cypress/integration) folder

## Full code coverage

Front- and back-end coverage for this application is collected using the [@cypress/code-coverage](https://github.com/cypress-io/code-coverage) plugin. You can run the locally instrumented server and client using `npm run dev:coverage` command. The backend coverage is exposed in [server/server/index.js](server/server/index.js) via endpoint listed in [cypress.json](cypress.json) (usually `GET /__coverage`). The frontend coverage is collected by instrumenting the web application source code on the fly, see the [client/.babelrc](client/.babelrc) file.

The combined report is saved in `coverage/index.html` after the tests finish:

![Example full coverage report](images/full-coverage.png)

To learn more, read the [Cypress code coverage guide](https://on.cypress.io/coverage).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

Requires Python 2.7 for node-gyp to be compiled.
