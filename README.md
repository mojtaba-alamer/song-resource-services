# Solution for (Project for Docker Learing Program)

This project my work according to https://git.epam.com/Siarhei_Svila/kubernetes-mentoring-program/-/blob/SA-run/1-microservices-architecture-and-docker/task/README.md task

## Solution
### Sub-task 1: Docker images
You can see my work in `resource-service\Dockerfile` or `song-service\Dockerfile`

* I made the images based on node:lts-alpine3.19
* I started the npm install before copying the rest of the project files to make docker cache this step in the next build

There is a room for enhancment where I could build the project locally and  move the dist folder only instead of the whole project but I did not do it to keep things simple

### Sub-task 2: Docker Compose file
You can see my work in docker-compose.yml
* I moved the database init script `mongo-init.js` into `/docker-entrypoint-initdb.d/mongo-init.js` inside the mongodb to run it when the container lunched
* I made `resource` and `song` depends on mongodb to assure that the database running before starting

## Screenshots

### Testing docker-compose
![alt text](screenshots/docker%20compose%20terminal.png)

![alt text](screenshots/docker%20desktop.png)

### Testing Resources API
Create
![alt text](screenshots/create%20resource.png)

Get
![alt text](screenshots/get%20resource.png)

Delete
![alt text](screenshots/delete%20resource.png)


### Testing Songs API
Create
![alt text](screenshots/create%20song.png)
Get
![alt text](screenshots/get%20song.png)
Delete
![alt text](screenshots/delete%20song.png)