# todolist-paybox
This repository contains the code for implementing a Todo Server Microservices and Notification Server using Node.js and TypeScript.

## Introduction

The Todo Server Microservices and Notification Server are designed to provide an efficient solution for managing todo tasks and sending notifications. This project leverages the power of Node.js and TypeScript to ensure robustness, flexibility, and maintainability.

## Assumptions
1. I ignored security risks such as:
    - JWT implementation to ensure the source that sends the request is valid.
    - HTTPS to ensure secure communication
    - Proxy server to ensure extra layer of security and to handle requests from the client to the microservices.
    - Input validation 
2. I ignored performance considerations such as:
    - Caching
    - Load Balancing
3. I ignored safe parameters for DB and more. In real life project we should get parameters from the cloud env.
   I could have implemented using .env, but did not have the time.

## Run the project
```cd backend-todolist```
```npm i```
```npm run start```

```cd notofication-service```
```npm i```
```npm run start```

Alternativly you can run both servers from vscode.

## Overview
The todo list server is implemented in `backend-todolist`, it's easy to add more microservices for this server, we can do so as the following:
1. Add new folder for for the new service
2. Implement db model and service
3. Implement a controller
4. Extends the response with new attributes
5. Add the new controller to the routes use in `useControllers`


The notification server is implemented in `notification-service` folder.
It is a general purpose notification server, and we can easily implement notification for anotrher microservices needs

* Please ignore the `frontend-todolist`, I wanted to implemented a page using vue.js, but did not have the time.
