# Reactive Weather

![Build status](https://travis-ci.com/ermolaevp/reactive-weather.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/ermolaevp/reactive-weather/badge.svg?branch=master)](https://coveralls.io/github/ermolaevp/my-contacts-client?branch=master)

## Requirements

- [Node 12](https://nodejs.org)
- [Yarn Package Manager](https://yarnpkg.com)

## Installation

`yarn install`

## Run development server

`yarn start`

## Build production version

Before building and deploying production version you need to change the `homepage` parameter in `package.json` file. Change it to `./` if you are planning to deploy to the domain root (http://example.com) or specify absolute url e.g. http://example.com/project-path

`yarn build`

## Test

`yarn test`

## Test coverage

`yarn test --coverage`
