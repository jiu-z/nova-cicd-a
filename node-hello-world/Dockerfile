FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app
# COPY --from=datadog/serverless-init:1 /datadog-init /app/datadog-init
# COPY --from=datadog/dd-lib-js-init /operator-build/node_modules /dd_tracer/node/
# ENV DD_SERVICE=datadog-demo-run-nodejs
# ENV DD_ENV=datadog-demo
# ENV DD_VERSION=1

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source, copy everything in current folder to /usr/src/app (workdir)
COPY . .


EXPOSE 8080
# ENTRYPOINT ["/app/datadog-init"]
CMD [ "node", "app.js" ]