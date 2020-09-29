# Pull official base image:
FROM node:latest

# Set working directory:
WORKDIR /usr/src/ui

# Add '/gui/node_modules/.bin' to $PATH:
ENV PATH /usr/src/ui/node_modules/.bin:$PATH

# Install app dependencies:
COPY ./josh_bot_2.0/ui/package.json ./
COPY ./josh_bot_2.0/ui/package-lock.json ./
RUN npm install
RUN npm audit fix

# Add app:
COPY ./josh_bot_2.0/ui ./

# Expose That Port!!!
EXPOSE 3000

# Start app:
USER node
CMD ["npm", "start"]
