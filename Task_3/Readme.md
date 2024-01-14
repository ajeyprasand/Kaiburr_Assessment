# TaskManager UI

## Overview 
The TaskManager UI is designed to interact seamlessly with the TaskManager API (Task_2). It provides a user-friendly interface to manage tasks efficiently.

## Tools Used
  1. **Language:**
     - Java
     - JavaScript (Js)
     - HTML
     - CSS
  2. **Build:**
     - Maven (for Java)
     - NPM (for JavaScript)
  3. **Framework:**
     - Spring Framework (for Java)
     - React.js (for JavaScript)
  4. **Backend:**
     - MongoDB

## HomePage
<img width="951" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/ed0c6189-5a8b-48c9-b15f-8b5db71b5955">

## Actions which can be performed:
  1.Search All: (Default option) The table is populated with all existing task.This can be done by selecting All from dropdown and clicking the search icon
  2.Search ByID: The table is populated with task which matches the given ID.This can be done by selecting ByID from dropdown and entering the ID in searchfield and clicking the search icon
<img width="954" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/4a504f3a-6389-4951-a286-ff2787db7884">

  3.Search ByName: The table is populated with task which contains the given Name.This can be done by selecting ByName from dropdown and entering the Name in searchfield and clicking the search icon
<img width="957" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/99b54fec-0625-466b-8e6a-be4caf2fcacc">

  4.Search ByAssignee: The table is populated with task which matches the given Assignee.This can be done by selecting ByAssignee from dropdown and entering the Assignee in searchfield and clicking the search icon
  <img width="960" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/8fc18d36-517d-4412-a0fd-5777be844a4d">
  5.Delete Task: When this action is performed the task is removed from the database.This can be done by clicking the thrash icon under action column against the task
  <img width="956" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/4a1a7068-9c5e-4ecc-82a5-c5a72169d309">
  6.Add Task: By clicking the add task button in navbar the user is navigated to add taskpage

## Add Task page
<img width="942" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/6d3089d8-defa-4787-8685-dc12dff9b04f">

## Actions which can be performed:
  1.Submit: After populating all data, by clicking submit,the task successfully gets inserted into the database.
  <img width="955" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/096ad665-5bc6-4054-8a77-e1c847cbfc9b">
  2.Cancel: By clicking cancel, the user can navigate to homepage

  ### Form validation
  1. All fields are required
  <img width="956" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/42133931-afd1-4051-8cb8-6de26e934500">
  2. Cannot add task with already existing ID
  <img width="954" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/e09a0d35-7fd9-442e-aa06-b5064a91d267">

## How to run?
1. Clone the repo
2. Open a JavaScript IDE and a Java IDE that supports Maven. You'll need two terminals.
3. In the Java IDE, run the project  which will start the backend service
4. In JS IDE navigate to frontend and run the command `npm start` which  will start the frontend development server.


