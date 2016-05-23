FROM phusion/baseimage

EXPOSE 80
EXPOSE 35729

RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get update && apt-get install --assume-yes --quiet \
  nodejs \
  git \
  python \
  build-essential

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./package.json
RUN npm install

COPY . .

ENTRYPOINT ["./docker-entrypoint.sh"]
