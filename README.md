# How to run this project

It is recommended that this project be run with Node.js `v20.11.1`. 

There are two possible ways to run this app: either the user enters `npm install` and subsequently `npm start` to run the project, or the user can simply run `docker-compose up` if they wish to run the app in a Docker container.

In both cases, the app is then available at [http://localhost:3000](http://localhost:3000).

# Testing

The project contains some basic unit and end2end tests. To run the provided unit tests, `npm test` needs to be run within the project's directory, while the end2end tests are run by running `npx cypress open`, which will open up the Cypress test suite.

