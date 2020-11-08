# Management System

## Introduction

Management System is an company management website allow manager assgins tasks to employees and allow employees to view their current task.

The website can also allow employees to check their attendances, departments, kpi.

The website is still in progress, right now I finish all the back-end database schema design, seeding and query function. I also finish essential express routes.

In front-end, it is still missing a lot of functionaly, I will continue to work in front-end to implement all the feature I design in back-end.

## Setup
In back-end
```sh
cd express-back-end
```
create a new database in elephantSQL

create a `.env` file copy the `.env.example` into the `.env` file and put your elephantSQL URL
```sh
npm i knex -g
npm install
```
To create schema in database
```sh
knex migrate:rollback
knex migrate:latest
knex seed:run
```
To restart the database, run the above command again.

In front-end
```sh
cd react-front-end
npm install
```

## Start the server

Open two terminals, one in `express-back-end`, one in `react-front-end`

In `express-back-end` 

run `npm run go`

In `react-front-end`

run `npm start`

## Log in

In the login page, type `Henry` and you will log in as manager, type `Alice` and you will log in as employee

## Screenshots
!["Screenshot of Manager Mode and group page"](https://github.com/henryhe1234/management/blob/main/docs/Screen%20Shot%202020-11-08%20at%201.12.37%20PM.png?raw=true)
!["Screenshot of Manager Mode and assign task page"](https://github.com/henryhe1234/management/blob/main/docs/Screen%20Shot%202020-11-08%20at%201.13.03%20PM.png?raw=true)
!["Screenshot of profile page"](https://github.com/henryhe1234/management/blob/main/docs/Screen%20Shot%202020-11-08%20at%201.13.24%20PM.png?raw=true)
!["Screenshot of employee page and view task page"](https://github.com/henryhe1234/management/blob/main/docs/Screen%20Shot%202020-11-08%20at%201.13.46%20PM.png?raw=true)