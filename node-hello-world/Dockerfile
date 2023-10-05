FROM node:16-alpine
WORKDIR /usr/src/app
COPY --from=datadog/serverless-init:1 /datadog-init /app/datadog-init
COPY --from=datadog/dd-lib-js-init /operator-build/node_modules /dd_tracer/node/
ENV DD_SERVICE=datadog-demo-run-nodejs
ENV DD_ENV=datadog-demo
ENV DD_VERSION=1

COPY package*.json ./

RUN npm install
COPY . .
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
# ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 8080
CMD [ "/entrypoint.sh" ]