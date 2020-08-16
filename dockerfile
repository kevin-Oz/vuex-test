
FROM node:14.8.0-alpine3.10 AS build-env
WORKDIR /app
COPY . ./
RUN npm install && npm run build

FROM nginx:1.19.1
COPY --from=build-env /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

