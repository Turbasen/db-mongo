# @turbasen/db-mongo

[![Build status](https://app.wercker.com/status/8af22dd80c3f309b1e116e251dd66cd0/s "wercker status")](https://app.wercker.com/project/bykey/8af22dd80c3f309b1e116e251dd66cd0)
[![Codacy grade](https://img.shields.io/codacy/grade/eeb155a45852449da23b2e10b09c6ff9.svg "Codacy grade")](https://www.codacy.com/app/Turbasen/db-mongo)
[![Codacy coverage](https://img.shields.io/codacy/coverage/eeb155a45852449da23b2e10b09c6ff9.svg "Codacy coverage")](https://www.codacy.com/app/Turbasen/db-mongo)
[![NPM downloads](https://img.shields.io/npm/dm/@turbasen/db-mongo.svg "NPM downloads")](https://www.npmjs.com/package/@turbasen/db-mongo)
[![NPM version](https://img.shields.io/npm/v/@turbasen/db-mongo.svg "NPM version")](https://www.npmjs.com/package/@turbasen/db-mongo)
[![Node version](https://img.shields.io/node/v/@turbasen/db-mongo.svg "Node version")](https://www.npmjs.com/package/@turbasen/db-mongo)
[![Dependency status](https://img.shields.io/david/Turbasen/db-mongo.svg "Dependency status")](https://david-dm.org/Turbasen/db-mongo)

Internal mongoDB wrapper for Nasjonal Turbase API.

## Getting started

Download [Docker for Mac or Windows](https://www.docker.com/products/docker).

Run in this directory:

```
$ docker-compose up
```

Docker is now watching for changes and will run the test suite automatically.

## Usage

Connects automatically using `MONGO_URI`, or `MONGO_PORT_27017_TCP_ADDR` +
`MONGO_PORT_27017_TCP_PORT` environment variables, or default to `mongo` +
`27017`.

```js
const mongo = require('mongo');

mongo.on('ready', () => {
  console.log('mongoDB is ready!');
});
```

## [MIT lisenced](https://github.com/Turbasen/Auth/blob/master/LICENSE)
