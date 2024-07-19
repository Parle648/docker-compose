FROM node:20-alpine
WORKDIR /server
COPY ./ .
RUN npm install && npm run build
CMD ["npm", "start"]