# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=12.22.12

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

RUN mkdir -p /app

WORKDIR /app

# Run the application as a non-root user.
COPY ./package*.json  /app
RUN npm install


# Copy the rest of the source files into the image.
COPY . /app

# Expose the port that the application listens on.
EXPOSE 8081 
# Run the application.

CMD ["npm", "start"]
