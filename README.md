# Get Shit Done -- Full Stack Version!
This is a full stack version of my Nashville Software School Front End Capstone: [Get Shit Done](https://github.com/ericlfrey/PROject-Planner)

[Video Walkthrough!](https://www.loom.com/share/3134bf70d1d0484dbd500e74ae8708b7) - Loom Walkthrough

![logo](https://user-images.githubusercontent.com/107942776/223236457-7dfa7824-1aa7-4609-9841-a8923173329d.png)

## Topics
- [Overview](#overview)
- [MVP Features](#mvp-features)
- [Try the App Yourself](#try-the-app-yourself)
- [Planning to Get Shit Done](#planning)
- [Code Snippets](#code-snippets)
- [Tech Stacks for Get Shit Done](#tech-stacks)
<!-- - [Stretch Features](#stretch-features) -->

## Overview
Get Shit Done is a Project Planning App that allows a User to Create, Read, Update and Delete a Project, and then maintain full CRUD on  Tasks and Materials associated with the Project. 

Planning is hard. Maintaining details on several projects at once can easily lead to disorganization. GSD was designed to help organize details and maintain the scope of several projects at once, all in one place. Not only can Tasks be easily seen in the Project Details for initial planning and implementation, but also Materials are easliy assigned to Tasks, and also tallied up so the User can see the Estimated Cost of the Project.

[Video Walkthrough!](https://www.loom.com/share/3134bf70d1d0484dbd500e74ae8708b7) - Loom Walkthrough


## MVP Features 

<em>Projects:</em>
- Sign in via Google Authentication
- Add a new Project to see the project folder visible on the home page with all other open projects.
- Clicking the Project folder takes the User to the Project Details page which has the open Tasks and Materials associated with the Project. Also this page contains the Date Created, and Estimated Cost of the Project.
- The Actions dropdown has options for the User to Edit the Project Name, Delete the Project, Add a Task, or Add a Material.
- Deleting a Project also deletes all associated Tasks and Materials.
<img src="https://user-images.githubusercontent.com/107942776/223227346-583dd132-ffa5-40c7-8076-2e225b9100be.png" width="500"/>
<img src="https://user-images.githubusercontent.com/107942776/223227374-80f9f9b8-a9d6-4a50-9b90-cab5c87903d2.png" width="500"/>

<em>Tasks:</em>
- Task Cards on the Project Details page show the Status (not started, in progress, complete) an the Due Date.
- Clicking the dropdown has options for the User to view the Task Details page, Edit the Task, or Delete the Task.
- Clicking the Task Name also takes the User to the Task Details Page.
- The Task Details Page shows the associated Project, Date Created, Due Date, and the Task Details. 
- The dropdown has options for the User to Edit or Delete the Task.
<img src="https://user-images.githubusercontent.com/107942776/223227439-de198d43-2aa6-415a-a440-8a03bc217682.png" width="500"/>

<em>Materials:</em>
- Material Cards on the Project Details page show the Status (acquired, not acquired) and the associated Task.
- Clicking the dropdown has options for the User to view the Material Details page, Edit the Material, or Delete the Material.
- Clicking the Material Name also takes the User to the Material Details Page.
- The Material Details Page shows the Total Material Cost, associated Project and Task, Status, Price, and Quantity. 
- The dropdown has options for the User to Edit or Delete the Material.
<img src="https://user-images.githubusercontent.com/107942776/223227453-e2c94084-9572-49ae-b670-92d81d434963.png" width="500"/>


## Try the app yourself

1. Set up a [Firebase](https://firebase.google.com/) project - [Here's how to setup](https://www.loom.com/share/163ffe1539bb482196efa713ed6231e9)
2. Clone GSD to your local machine 
```
git clone git@github.com:ericlfrey/gsd-client.git
```

3. Next, create an .env file at the root of the project and paste the following keys into the .env file:
```
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_DATABASE_URL=http://localhost:8000 

```
4. The last portion of the Firebase walkthrough from step 1 highlights where to find the values to put in the empty strings in the code snippet of step 3 . From Firebase, copy the values and paste them into the empty strings of the respective keys located in the .env file.
5. Be in the root directory and from your command line, run
```
npm i
```
6. Now from your command line, run:
```
npm run prepare
```
7. To start Get Shit Done, run:
```
npm run dev
```
8. Click http://localhost:3000 in the terminal to open the browser
9. Setup and run the [Get Shit Done Server](https://github.com/ericlfrey/gsd-server) for this project to run on local machine.



## Planning
#### ERD for GSD MVP
<img src="https://user-images.githubusercontent.com/107942776/242314139-52b847cf-59ab-4141-8fbc-331238e73f85.png" width="500"/>

#### Screenshot of Wireframe with Next JS Routes
<img src="https://user-images.githubusercontent.com/107942776/223234725-01338efd-df14-4573-9305-c3920700d582.png" width="500"/>

[Link to ERD](https://dbdiagram.io/d/645d6fdddca9fb07c4f01fd6)

[Link to Figma Wireframe](https://www.figma.com/file/BeHEcafD42hi4gObUrpJED/Get-Shit-Done?node-id=0%3A1&t=bTbT54EAw1skWNGO-0)


## Code Snippets
#### Project Card Component
<img src="https://user-images.githubusercontent.com/107942776/242313706-4ac1b346-fed6-4987-b862-2b6b9435c4b1.png" width="600"/>

#### Material Details Page
<img src="https://user-images.githubusercontent.com/107942776/242313723-d430dd74-5662-40d7-ae94-487df22bc025.png" width="600"/>

## Tech Stacks
<div align="center">  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="nextjs" width="40" height="40"/>
<a href="https://firebase.google.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a> 
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
<a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" /></a>  
</div>


## Contributors
- [Eric Frey](https://github.com/ericlfrey)
