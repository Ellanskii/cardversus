# Сравнение банковских продуктов на основе мнения пользователей

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Requirements

Для настройки окружения нужно установить [direnv/direnv](https://github.com/direnv/direnv), 
создать файл `.envrc` в корне проекта со следующими переменными

```bash
export APIKEY=
export AUTHDOMAIN=
export DATABASEURL=
export PROJECTID=
export STORAGEBUCKET=
export MESSAGINGSENDERID=
```

## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

## Deploy to Firebase

### setup project

```
$ yarn firebase init
```


### setup env

```bash
firebase functions:config:set environment.apikey=""
firebase functions:config:set environment.authdomain=""
firebase functions:config:set environment.databaseurl=""
firebase functions:config:set environment.projectid=""
firebase functions:config:set environment.storagebucket=""
firebase functions:config:set environment.messagingsenderid=""
```
#### Для telegram-бота
```bash
firebase functions:config:set bot.token="$TOKEN" bot.chat="$CHATID"
```

### deploy

```
$ yarn deploy
```
