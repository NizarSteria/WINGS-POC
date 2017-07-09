FROM node:latest

MAINTAINER Nizar Aouissaoui

ENV CONTAINER_PATH /var/www/wings-poc 

# Install app dependencies
COPY      . $CONTAINER_PATH
WORKDIR   $CONTAINER_PATH

RUN npm install

EXPOSE 3000

CMD [ "npm", "run dev" ]



# Build: docker build -f node.development.dockerfile -t aouissaoui/node .

# Option 1
# Start MongoDB and Node (link Node to MongoDB container with legacy linking)
 
# docker run -d --name mongodb mongo
# docker run -d -p 3000:3000 --link mongodb --name nodeapp aouissaoui/node

# Option 2: Create a custom bridge network and add containers into it

# docker network create --driver bridge isolated_network
# docker run -d --net=isolated_network --name mongodb mongo
# docker run -d --net=isolated_network --name nodeapp -p 3000:3000 aouissaoui/node

# Option 3: Use Docker Compose

# docker-compose build
# docker-compose up
