# Creating a Automated CI-CD pipeline using github,jekins and sonarqube
## Project Repository
This CI/CD pipeline is implemented for the project hosted on GitHub. The repository link is https://github.com/ajeyprasand/Kaiburr_Assessment_Task_4/

## Pipeline Overview
The CI/CD pipeline is designed to automate the build, test, and code analysis process using Jenkins, Maven, and SonarQube. The pipeline is triggered automatically on every pull request or commit to the main branch, ensuring continuous integration and delivery.
![1690519424989](https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/43aa75f6-abea-4630-b943-daa904cda56f)

## Tools Used
  -Jenkins: Automation server for building, testing, and deploying code.
  -Maven: Build tool for compiling the project.
  -SonarQube: Platform for static code analysis.

## Pipeline Configuration
 ### 1. Jenkins Job:
    -A Jenkins pipeline job is created.
    -The pipeline script is sourced from the repository using "Pipeline script from SCM."
    -Jenkinsfile path in the repository is specified.
 ### 2.Build Trigger:
    -GitHub hook trigger for GITScm polling is enabled to automate builds on pull requests and commits.
<img width="933" alt="Screenshot 2024-01-14 213146" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/94e18130-5b92-4808-92f3-b1309caf9dfb">
 >Note: Ngrok is used to expose Jenkins running on localhost.

## Pipeline Execution Steps
<img width="915" alt="Screenshot 2024-01-14 213233" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/6dab4529-5732-4f75-bf66-ccc3cab5cf4a">
>4 stages of build => git checkout(implicit),git checkout(mentioned in jekinsfile),code compile,sonarqube code analysis

 ### 1.Code Compilation:
    -Jenkins triggers a build upon receiving a webhook.
    -The code is compiled using Maven.
 ### 2.SonarQube Integration:
    -The project is added to SonarQube by providing GitHub repository details.
    -Jenkins and SonarQube are integrated using the SonarQube authentication token, host URL, and project key.
 ### 3.Code Analysis:
    -Jenkins initiates the SonarQube analysis using the command: bat "mvn sonar:sonar -Dsonar.token=${SONAR_TOKEN} -  Dsonar.host.url=http://192.168.0.106:9099 -Dsonar.projectKey=Task_4"
<img width="911" alt="Screenshot 2024-01-14 212920" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/3b9f8771-1829-4541-b477-f0bb8fdf96fd">
>Code analysis result performed in Sonarqube by jekins
