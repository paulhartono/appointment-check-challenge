# appointment-check-challenge

## Overview

This code is written in node.js - so please make sure that you have nodejs installed.
Alternatively, you can run this project using docker as described below

## Environment Variables

`APPOINTMENT1_START` is the appointment 1 start time (recognised date string parser ONLY, such as yyyy-mm-dd hh:mm:ss)
`APPOINTMENT2_START` is the appointment 2 start time (recognised date string parser ONLY, such as yyyy-mm-dd hh:mm:ss)
`APPOINTMENT1_DURATION` This will set the appointment 1 duration in minutes
`APPOINTMENT2_DURATION` This will set the appointment 2 duration in minutes

## Using Docker

- Clone the project
- type `./run.sh .env` or you can create your own environment variable

## Using npm

### Setup

- Clone the project
- Type `npm install`

### TEST

- Type `npm test` to run unit test
- Type `npm run test:coverage` to check test coverage

### Run

- Type `npm start`

## Some Notes

- This Code does not include any CLI or GUI.
- the use of tsnd (ts-node-dev) is unnecessary for this project, but i purposely left it there as it is good for ts type project in future (perhaps with nodemon too for development)
