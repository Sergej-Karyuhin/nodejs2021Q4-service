FROM node:16 AS build
EXPOSE 4000
WORKDIR /src
COPY . .
FROM node:16-alpine
COPY --from=build /src /
CMD [ "npm", "start"]