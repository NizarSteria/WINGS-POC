# WingsPoc: Angular Full Stack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

The frontend is generated with Angular CLI. The backend is made from scratch. Whole stack in TypeScript.

This project uses the MEAN stack:

Mongoose.js (MongoDB): database
Express.js: backend framework
Angular 4: frontend framework
Node.js: runtime environment
Other tools and technologies used:

Angular CLI: frontend scaffolding
Bootstrap: layout and styles
Font Awesome: icons
JSON Web Token: user authentication
Angular 2 JWT: JWT helper for Angular
Bcrypt.js: password encryption



## Prerequisites

Install Node.js and MongoDB
Install Angular CLI: npm i -g @angular/cli
From project root folder install all the dependencies: npm i

## Run

## Development mode

cp mongodb-osx-x86_64-2.6.7/bin/* /usr/local/bin/ (mongod in path)

tsc -w -p server/: to generate js from TS.

npm run dev: concurrently execute MongoDB, Angular build, TypeScript compiler and Express server.

A window will automatically open at localhost:4200. Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser

## Production mode

npm run prod: run the project with a production bundle and AOT compilation listening at localhost:3000

