FROM node:20

WORKDIR /app

RUN npm install -g @angular/cli

EXPOSE 4200

CMD ["sh", "-c", "npm install && ng serve --host 0.0.0.0"]
