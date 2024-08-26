# Node.js Online Voting Platform

A web application the online voting platform for the Valley of Shangri-La where:

* Voter can register, login & votes  
* Election comminssion officer can start/stop election, monitor the election status & declare the winner
* Public/Media to get realtime update and result via a REST API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Sqlite   
* NPM/Node.js
* NPM/Express.js

### Installing & Running

#### Unpacked the files

* unzip the online voting application on the laptop or local machine

#### Install dependencies 

`npm install`

#### Run the application

* `npm run devStart` to start the node server (backend), then open the localhost site specified in the output in a web browser.
* open the `index.html` at the folder `onlineVoting/view/voter` to start the web application (frontend)

## Deployment

This project is currently set up to be deployed in a local machine on port 3000.

To deploy the application on other server or public cloud, the server has to have the dependency installed. Run the application as mentioned above

The frontend code has to install on to the web server with the end point to the backend need to be modified to refect the different backend location.

## Built With

* [sqlite](https://www.sqlite.org/) - The database
* [ExpressJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Node.js](https://nodejs.org/en/) - The back end run-time
