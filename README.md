# Muuv Coding Assignment

This server has a single Endpoint that consumes a third party API [The Movie Database](https://developers.themoviedb.org/3), and retrieves the Marvel actors who performed more than one character.

## Tools

- Jest for testing
- Eslint for code linting
- Nodemon for live reloading the server on development
- Node-cache for caching API responses

## Getting Started

### Setup

Node v16.14.0
Npm v8.3.1

### Install dependencies

```shell
npm install
```

### Run server in dev mode with live reload

```shell
npm run dev
```

### Running tests

```shell
npm test
```

Run tests and show test coverage:

```shell
npm run test:coverage
```

### Lint code

```shell
npm run lint
```

## How to use

**Important**
**In order to run the project properly it is necessary to SET the environment variable `MOVIE_DATABASE_API_KEY`, It must contain a valid api_key we use to query TheMovieDatabase API.**

```shell
export MOVIE_DATABASE_API_KEY=<valid_movie_database_api_key>
```

The server requires [Node.js](https://nodejs.org/en/) v16.\* to be installed.

1. Clone this repository.

2. In the root directory, run `npm install` to install all dependencies.

3. Run `npm start` which should start the server in cluster mode.

4. The server is ready and listening for incoming requests on port `7000`.

- URL: `http://localhost:7000/`

```shell
curl --request GET \
  --url 'http://localhost:7000/actorsWithMultipleCharacters' \
  --header 'Content-Type: application/json;charset=utf-8'
```

## API DOCS

### [Actors](src/api/actors/docs/ACTORS.md)
