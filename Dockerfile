FROM phusion/baseimage

EXPOSE 80
EXPOSE 35729

RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get update && apt-get install --assume-yes --quiet \
  nodejs \
  git \
  python \
  build-essential

https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm \
  && npm install fs-extra \
  && sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./package.json
RUN npm install

COPY . .

ENTRYPOINT ["./docker-entrypoint.sh"]
