FROM navinkr431/nodejs:latest
WORKDIR /data/
COPY .  /data/
RUN cd /data/ && npm install --force && npm run build
RUN cd /data/build/ && ls -l
WORKDIR /data/
EXPOSE 3000/tcp
CMD ["npm", "start"]
