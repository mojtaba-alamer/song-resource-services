# Solution for (Deployment And Configuration)

This project is my work according to https://git.epam.com/Siarhei_Svila/kubernetes-mentoring-program/-/tree/SA-run/3-deployment-and-configuration/task task

all yml files can be found under kubernetes_manifests folder

## Solution
### Sub-task 1: Secrets and config-maps

**1.Add Secrets object to your k8s manifest to store database username and password.**

You can see my work under `db-secrets.yml`

![alt text](screenshots/image.png)

Note: 
This file was created to just prove that I know how to create Secret Object However, Since the provided project code did not use any password,I am not going to use these secrets

**2.Add config maps to store environment variables for application deployments.**

You can see my work under `apps-configmap.yml`

![alt text](screenshots/image-1.png)


**3.Add sql scripts to init databases (create tables) to config maps.**

You can see my work under `sql-scripts-configmap.yml`

![alt text](screenshots/image-2.png)

Note: 
used mongo-init.js to create databases instead of tables (like the first module)

**4.Change k8s Deployment and StatefulSet objects to load these secrets and config-maps.**

You can see my work under `resource-mongodb-statefulset.yml` & `song-mongodb-statefulset.yml`

resource-db-creation

![alt text](screenshots/image-3.png)

song-db-creation

![alt text](screenshots/image-5.png)


## Sub-task 2: Liveness and Readiness probes

**1.Add endpoints for health checks at your applications.**

You can see my work under `resource-service\src\resource\resource.controller.ts` & `song-service\src\song\song.controller.ts`

Song-Service:

![alt text](screenshots/image-6.png)

Resource-Service:

![alt text](screenshots/image-7.png)

Note:
I had a lot of limitations because the whole project was not written by me, and I am a Python expert (not JS). However, if the case were different, I would have made a connection check with the database and the song-resource connection, etc.


**2.Add startup, liveness and readiness probes for your Deployment objects at k8s manifest.**

You can see my work under `resouce-service-deployment.yml` & `song-service-deployment.yml`


Song-Service Deployment:

![alt text](screenshots/image-8.png)

Resource-Service Deployment

![alt text](screenshots/image-9.png)

**3.Add startup, liveness and readiness probes for your StatefulSet objects at k8s manifest.**


You can see my work under `resource-mongodb-statefulset.yml` & `song-mongodb-statefulset.yml`

Both files has the same configuration

![alt text](screenshots/image-10.png)


## Sub-task 3: Deployment strategies

1.**To Song service add a new field genre (:String). Add corresponding logic so this field will represent genre of a song. This field also should be returned at the responses for both POST and GET operations.**

You can see my work under `song-service\src\song\entities\song.entity.ts` & `song-service\src\song\dto\song.dto.ts`


2.**Build a new docker screenshots/image of application with changes and push it to the Docker Hub (specify another version of container).**

![alt text](screenshots/image-11.png)

3.**Add Rolling-update deployment strategy to your deployments at manifest files and apply the  manifest, so the old versions of microservices are deployed and running.**

You can see my work under `song-service-deployment.yml`

![alt text](screenshots/image-12.png)

`kubectl describe deployment song-deployment -n=k8s-program`

![alt text](screenshots/image-13.png)

`kubectl rollout history deployments -n=k8s-program`

![alt text](screenshots/image-14.png)

We can see that the song-deployment got two revisions The old and the new version

## Sub-task 4: Deployment history

**roll back to previous version of your deployment without changing your manifest files**

`kubectl rollout undo deployments song-deployment -n=k8s-program`

![alt text](screenshots/image-15.png)



