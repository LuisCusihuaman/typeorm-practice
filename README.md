<!-- TITLE -->
<h1 align="center">TypeORM Practice with NestJS</h1>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<!-- SUMMARY -->

_I'll walk you through how to set it up, connect to your database, generate and run migrations for production use, use the Repository API, create custom queries, database relationships._

Based on [TypeORM Tutorial: Migrations, queries, and more! | NestJS
](https://youtu.be/sNosL578ECo)
<br />

## 🔨 Requirements

- NPM && NODEJS
- [Docker](https://docs.docker.com/engine/install/#server)
  and [Docker Compose](https://docs.docker.com/compose/install/#install-compose)

## 🚀 Environment setup

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

# run api with docker compose
docker-compose up -d --build
```

## Getting Started

At this time, you have a RESTful API server running at `http://localhost:PORT/`. It provides the following endpoints:

-
-

### Connect to database

```bash
docker-compose exec mysql mysql -u user -ppassword -D backoffice

SELECT * FROM courses;
```

### Show logs

```bash
docker-compose logs -f mooc-api
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### License

Nest is [MIT licensed](LICENSE).
