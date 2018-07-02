# tbz-lunch-locations-webservice
TBZLunchLocations app backend webservice.

## Prerequisites
- Mysql Server [Download](https://www.mysql.com/en/) (Or pre packaged stacks like Winginx or XAMMP with Mysql/Mariadb installed).
- Import database from db folder into mysql server.
- Nodejs 10+. [Download](https://nodejs.org/en/)
- gulp command line interface (used for build tasks) installed. Install with `npm i -g gulp-cli`

## Build
- Run `npm install` in terminal to download dependencies.
- Run `gulp build:server` in terminal to compile typescript files to regular js files into dist folder.

## Run
- Run `npm start` in terminal. To start the server.

## API Endpoints

### User
- GET /api/user -> Get all users in JSON format
- GET /api/user/{id} -> Get user by id in JSON format
- POST /api/user -> Store new user
- PUT /api/user/{id} -> Update user with given id.
- PUT /api/user/{id}/password -> Update user password with given id. Currently not implemented. Only "Hello World" response.

### Location
- GET /api/location -> Get all locations in JSON format
- GET /api/location/{id} -> Get location by id in JSON format
- POST /api/location -> Store new location
- PUT /api/location/{id} -> Update location with given id.

### Rating
- GET /api/rating -> Get all ratings in JSON format
- GET /api/rating/{id} -> Get rating by id in JSON format
- GET /api/rating/user/{id} -> Get rating by user id in JSON format
- GET /api/rating/location/{id} -> Get rating by location id in JSON format
- POST /api/rating -> Store new rating
- PUT /api/rating/{id} -> Update rating with given id.
