# Express APP with Typescript 
# Task Crud Operation

## SetUp Guide 
 Step 1: Install express 

    npm init -y 
    npm i express 
    

Step 2: Setup typescript 
    npm i express @types/express

    Configure typescipt.json file 
    change rootdir: /src
    chnage outdir: /dist

Step 3: Create Folder routes, controllers and config and files app.ts and server.ts 
initialize the express app in app.ts 
and start the server on server.ts

Step 4: add routes on route folder

Step 5: Setup Database 

    npm install mongoose --save

    connect database and create folder models and add schema
step 6: add controller 
        add the logic of  createtask, updateTask, gettask, getTaskByID ,updateTaskStatus

step 7: test the api mannually by postman 
        add the endpoints and test all the endpoint by CRUD operation

Step 8: upload to github

#Usage 

step1: clone the repository 
step2: run the npm intall
step3: add the .env file and copdy from .env.example 
step4: in package.json add the scripts 
step5: npm run dev