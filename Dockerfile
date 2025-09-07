# [IMPORTANT] Must be built from the root of the project for the COPY/paths to work

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
