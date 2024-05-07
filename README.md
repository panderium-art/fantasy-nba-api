<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

After running one of these commands server will be up on 3000 port and be accessible via `http://localhost:3000`.

## Supabase Access
Reach out to me to obtain credentials to log into Supabase account with the database. To obtain database connection string(`DATABASE_URL`) follow next steps:
1. Log into supabase with provided creds
2. Selecte `Fantasy-NBA` project
3. Click on `Connect` button
4. In the displayed popup select `NodeJS` tab
5. Copy the connection string
6. Paste it in `.env` file as value of the `DATABASE_URL` key
7. Replace the `[YOUR-PASSWORD]` with database password(will be provided with credentials)

## Populating .env file
If you just cloned the project you need to create `.env` file and copy the keys from `.env.example` in it. After that you need to populate these values:

- to generate `JWT_SECRET` you can utilize this [website](https://www.grc.com/passwords.htm). Select this option `63 random alpha-numeric characters (a-z, A-Z, 0-9)`
- for `JWT_EXPIRES_IN` you can utilize `1h`(dafault value)
- for `DATABASE_URL` reach out to [Supabase Access](#supabase-access) section


## Swagger
To access swagger you first need to run:
```bash
npm start
# or
npm run start:dev 
```

Swagger will be accessible via this route:

`https://localhost:3000/api`

## Seeding the database
To seed the database you can run one of the following commands:

- to seed database without truncating the tables(add 10 more records to each of the table)

  `npm run prisma:seed`

- to seed database with truncating the tables(remove existing records from the table and after that add 10 records to each table)
  
  `npm run prisma:reset:seed`


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
