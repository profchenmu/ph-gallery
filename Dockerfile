FROM nginx
COPY ./dist/ph-gallery /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
