FROM node:16 AS build

ENV NODE_ENV=development
ENV REACT_APP_INFURA_KEY=""
ENV REACT_APP_PORTIS_ID=""
ENV REACT_APP_FORTMATIC_KEY=""
ENV REACT_APP_GOOGLE_ANALYTICS_ID=""
ENV REACT_APP_FIREBASE_KEY=""
WORKDIR /src/app

COPY . /src/app/

RUN yarn
RUN yarn run build

FROM nginx:1.22-alpine

#nginx settings
COPY ./.devops/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./.devops/htpasswd /etc/nginx/htpasswd
COPY ./.devops/robots.txt /usr/share/nginx/html/robots.txt

COPY --from=build /src/app/build /usr/share/nginx/html


