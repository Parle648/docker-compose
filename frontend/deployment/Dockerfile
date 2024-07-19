FROM node:20-alpine as build
WORKDIR /client
COPY ./ .
RUN npm install && npm run build

FROM nginx:1.22.1 as prod
COPY --from=build /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]