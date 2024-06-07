# Use an official Node.js runtime 
FROM node:22.2.0

# Working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Make the app accessible on port 8081
EXPOSE 8081

# Command to run the application
CMD [ "node", "index.js" ]
