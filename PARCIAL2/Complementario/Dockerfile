FROM node
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y","vim"]
EXPOSE 9000
COPY . /var/www
WORKDIR /var/www
ENTRYPOINT ["node","start"]