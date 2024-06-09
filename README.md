# Node.js CRUD Application with APIs 

This repository contains a simple Node.js CRUD (Create, Read, Update, Delete) application with APIs. This application allows you to perform basic CRUD operations on a collection of items.

## Features ⭐

- **Create:** Add new items to the collection.
- **Read:** Retrieve all items or a specific item from the collection.
- **Update:** Update the details of an existing item.
- **Delete:** Remove an item from the collection.

## Prerequisites 🛠️

Before running this application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB
- Mongoose
- REST APIs
- nodemon
- Express

## Setup 💻

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your_username/nodejs-crud-app.git
```

2. Navigate to the project directory:

```bash
cd nodejs-crud-app
```

3. Install dependencies:

```bash
npm install
```

4. Set up your environment variables:

   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:

     ```
     PORT=8080
     MONGODB_URI=your_mongodb_connection_uri
     ```

     Replace `your_mongodb_connection_uri` with your MongoDB connection URI.

## Usage 🚀👾

1. Start the server:

```bash
npm start index.js
```

2. Once the server is running, you can use your preferred API testing tool (e.g., Postman) to interact with the APIs.

## API Endpoints 🛠️

- **GET /items**: Get all items.
- **GET /items/:id**: Get item by ID.
- **POST /items**: Create a new item.
- **PUT /items/:id**: Update an existing item.
- **DELETE /items/:id**: Delete an item by ID.




# Node.js/Python Application with Docker

This repository contains a Node.js/Python application that interacts with a MongoDB database. The application is dockerized to ensure a consistent development and production environment. This README provides instructions for setting up and running the application using Docker and Docker Compose.

## Prerequisites

Ensure you have the following installed on your local system:

- Docker
- Docker Compose

## Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── index.js
└── README.md
```

## Dockerfile

The `Dockerfile` sets up a Node.js environment to run the application.

```dockerfile
# Use an official Node.js runtime 
FROM node:22.2.0

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Expose port 8081
EXPOSE 8081

# Command to run the application
CMD [ "node", "index.js" ]
```

## Docker Compose

The `docker-compose.yml` file defines two services: `mongo_db` and `app`.

```yaml
version: '3.8'

services:
  mongo_db:
    container_name: "database_container"
    image: mongo:latest
    restart: always
    volumes:
      - mongo_data:/data/db

  app:
    build: .
    ports:
      - 8081:8081
    environment:
      - PORT=8081
      - MONGODB_URI=mongodb://mongo_db:27017/Assignment_CRUD_APP
    depends_on:
      - mongo_db

volumes:
  mongo_data: {}
```

### Services

- **mongo_db**: Runs a MongoDB instance in a Docker container.
  - Uses the latest MongoDB image.
  - Persists data using a Docker volume (`mongo_data`).
  - Automatically restarts if the container stops.

- **app**: Runs the Node.js application.
  - Builds the Docker image from the `Dockerfile` in the current directory.
  - Maps port 8081 on the host to port 8081 in the container.
  - Sets environment variables for the application's port and MongoDB URI.
  - Depends on the `mongo_db` service to ensure the database is running before starting the application.

## Running the Application

1. **Build and start the services**:
   ```sh
   docker-compose up --build
   ```
## Stopping the Application

To stop the application and remove the containers, run:

```sh
docker-compose down
```

## Notes

- Ensure the `index.js` file is the entry point of your Node.js application.
- Adjust the MongoDB URI, port, and other environment variables as needed for your setup.
- The Docker setup assumes your application logic is in the same directory as the `Dockerfile`.


#Node.js/Python Application with Docker and CI/CD

This repository contains a Node.js/Python application that interacts with a MongoDB database. The application is dockerized to ensure a consistent development and production environment. This README provides instructions for setting up and running the application using Docker and Docker Compose, as well as setting up Continuous Integration (CI) to build and push Docker images to Docker Hub.

#Prerequisites
Ensure you have the following installed on your local system:

Docker
Docker Compose
AWS CLI
Jenkins
Terraform
kubectl


#Setting Up Jenkins on an EC2 Instance
#Create EC2 Instance
#Launch an EC2 Instance:

Instance Type: t2.medium
Storage: 30 GB
Configure Security Group:

Add a rule to allow traffic on port 8080 for Jenkins.

Also if you can want the scripts to install required dependencies the you can refer this link:

https://mrcloudbook.com/scriptvault-a-wiki-of-installation-scripts/


Jenkins Setup
Install Required Plugins
Go to Jenkins Dashboard > Manage Jenkins > Manage Plugins.
Install the following plugins:
Docker Pipeline
Docker
Docker Commons
NodeJS Plugin (for Node.js applications)
Create a Jenkins Job
Go to Jenkins Dashboard.
Click on "New Item".
Enter an item name, select "Pipeline", and click "OK".
In the Pipeline section, select "Pipeline script from SCM".
Set SCM to "Git" and provide your repository URL and credentials if necessary.
Set the "Script Path" to the location of your Jenkinsfile.
Jenkins Pipeline Script
Create a Jenkinsfile in the root directory of your project. Below is an example of what the Jenkinsfile might look like:


Configure Docker in Jenkins
Go to Jenkins Dashboard > Manage Jenkins > Configure System.
Under "Docker", add a new Docker Cloud and configure it with the appropriate settings for your Docker environment.
Running the Pipeline
Go to Jenkins Dashboard.
Select your job.
Click on "Build Now".
Jenkins will clone the repository, build the Docker image, run tests, push the Docker image to a registry, and deploy the application.

Conclusion
You have now set up a CI/CD pipeline for your Node.js/Python application using Jenkins and Docker. This pipeline will automate the process of building, testing, and deploying your application, ensuring that new changes are continuously integrated and deployed with minimal manual intervention.

