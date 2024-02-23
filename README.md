# Backend Developer Technical Assessment

### Understanding the narrative
After reading the project scope, I produced the following draws to amplify my view of the project:

- #### Get feed endpoint
  ![Alt text](https://i.ibb.co/5nN50f9/feed-Flow-drawio.png)

- #### Bonus feature
  ![Alt text](https://i.ibb.co/CPgqQpn/arquitetura-Desafio-drawio.png)

- #### Other endpoints
  ![Alt text](https://i.ibb.co/D4s0RKD/other-End-Points-Flow-drawio.png)

- #### Lanbda to feed S3
  ![Alt text](https://i.ibb.co/mzDc9w4/ultimo-drawio.png)
  

### Endpoints

- **GET** `/feed` | get data from json file that is storage in S3

  
- **GET** `/companies` | get all companies

- **GET** `/companies/:company_id` | get one company by id
  
- **POST** `/job` | post a job draft
  - Request body
  ```json
  {
    "company_id": ""
    "title":"",
    "description":"",
    "location":"",
    "notes":""
  }
  ```
  
- **PUT** `/job/:job_id/publish` | the "Bonus feature" image describes better this endpoit flow
  
- **PUT** `/job/:job_id` | can update the following data: title, location, description
  - Request body
   ```json
    {
      "title":"",
      "description":"",
      "location":"",
    }
    ```

- **DELETE** `/job/:job_id` | delete a job

- **PUT** `/job/:job_id/archive` | change the job status to "archive"


### Environment variables
  - #### folder expressApp
    ```env
    # pg config variables
    PGUSER=
    PGHOST=
    PGPASSWORD=
    PGDATABASE=
    PGPORT=
    
    # s3 env configs
    S3BUCKETNAME=
    S3FILENAME=
    
    # sqs queue URL
    SQSURL=
    
    # local port to run express app
    PORT=
    ```

  - #### folder feedS3
    ```env
    #pg config variables
    PGUSER=
    PGHOST=
    PGPASSWORD=
    PGDATABASE=
    PGPORT=

    # s3 env configs
    S3BUCKETNAME=
    S3FILENAME=
    ```

  - #### folder moderateContent
    ```env
    # pg config variables
    PGUSER=
    PGHOST=
    PGPASSWORD=
    PGDATABASE=
    PGPORT=

    # open ai config variables
    OPENAIAPIKEY=

    # sqs config
    SQSURL=
    ```

### Test features locally
  - **expressApp**
    
    Start the local serve in the local port that you specified in the .env file
      ```
      npm run dev
      ```
      
  - **feedS3**
    
    fetch the data from postgreSQL and storage it on S3 json file
      ```
      npm run execute
      ```
      
  - **moderateContent**
    
    send a message (to simulate te trugger) to sqs after that get the message and do the logic
      ```
      npm run test
      ```


### Bonus Questions

1. Discuss scalability solutions for the job moderation feature under high load conditions. Consider that over time the system usage grows significantly, to the point where we will have thousands of jobs published every hour. Consider the API will be able to handle the requests, but the serverless component will be overwhelmed with requests to moderate the jobs. This will affect the database connections and calls to the OpenAI API. How would you handle those issues and what solutions would you implement to mitigate the issues?
- res

2. Propose a strategy for delivering the job feed globally with sub-millisecond latency. Consider now that we need to provide a low latency endpoint that can serve the job feed content worldwide. Using AWS as a cloud provider, what technologies would you need to use to implement this feature and how would you do it?
- res
