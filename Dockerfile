FROM node:10.13.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm run newbuild

EXPOSE 3030

CMD ["npm", "start"]