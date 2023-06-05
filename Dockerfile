FROM node:14
WORKDIR /app-ecomm
COPY . .
RUN npm install
ENTRYPOINT npm start