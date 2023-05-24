# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app/frontend

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Build the frontend app
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
