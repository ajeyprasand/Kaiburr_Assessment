# TaskManager RestAPI
## Tools:
  1.Language: Java <br>
  2.Build: Maven <br>
  3.Framework: Spring Framework <br>
  4.Backend: MongoDB <br>
  5.Testing: Postman

## Functions:
  runs on localhost:{portnumber} , Deafult:8080 
  ### 1. Fetch ALLTasks: 
A get request is sent to endpoint `/get_task` which fetches all tasks present in MongoDB
  <img width="640" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/177a6088-3201-4c47-a182-3d2452419276">

  ### 2. Fetch Tasks by ID:
A get request is sent to endpoint `/get_task/{id}` which fetches a task which matches the given ID.If not 404 error is returned
  <img width="641" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/1b7bc4e5-06f8-4e0a-ad69-14b001629502">

  ### 3. Fetch Tasks by Name:
A get request is sent to endpoint `/find_ByName/{name}` which fetches tasks which contains the given Name.If not 404 error is returned
  <img width="647" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/6a18cdc5-a64d-4154-9759-bb9fc18dd405">

  ### 4. Fetch Tasks by Assignee:
          -A get request is sent to endpoint `/find_ByAssignee/{assignee}` which fetches maximum of 10 tasks which has assignee as the given assignee and is sorted by date-time.If not 404 error is returned
  <img width="650" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/846f77fa-0ada-4e4c-9571-e916c35c6768">

  ### 5. Insert Task:
A post request with data in its body is sent to endpoint `/add_task`
  <img width="650" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/ea5800ea-badb-4ce5-a227-b6676b3020b8">

  ### 6. Delete Task:
A Delete request is sent to endpoind `/del_task/{id} which deletes a task with given ID 
  <img width="644" alt="image" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/7bf9a5d5-c984-465a-81f5-43ac20ac8f78">


## How to run?
  1.Clone the repo<br>
  2.Navigate to Task_1<br>
  3.Open the project using intellij idea IDE<br>
  4.Run the project by clicking run icon
