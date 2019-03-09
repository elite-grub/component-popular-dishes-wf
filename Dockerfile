FROM node:10.13.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm install webpack -d
RUN npm run newbuild

EXPOSE 3030

CMD ["npm", "start"]