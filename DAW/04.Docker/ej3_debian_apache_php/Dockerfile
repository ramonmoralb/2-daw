##imagen base 
FROM debian:latest

LABEL org.opencontainers.image.authors="ramonmoreno.alu@iespacomolla.es"

RUN apt-get update && apt-get upgrade
RUN apt install -y php
RUN apt install -y apache2
RUN apt-get install vim -y
RUN apt-get install nano
RUN apt-get install net-tools
RUN apt-get install openssl

EXPOSE 80 443

## copia la web desde el anfitrión al contenerdor
COPY web1/public_html /var/www/html/web1/public_html

## copio el archivo de configuración de virtualHost
COPY web1/web1.com.conf  /etc/apache2/sites-available

##copio los certificados  ssl del repositorio al contenedor
COPY web1/tls/certs/ca_web1.crt /etc/apache2/tls/certs/
COPY web1/tls/private/ca_web1.key /etc/apache2/tls/private/
COPY web1/tls/private/ca_web1.csr /etc/apache2/tls/private/

#habilito el modulo ssl
RUN a2enmod ssl

## activo el virtualdhost
RUN a2ensite web1.com.conf 

## habilito la sobreescritura
RUN a2enmod rewrite

#reinicio apache
RUN service apache2 restart

# Comando para mantener Apache ejecutándose en primer plano
CMD ["apache2ctl", "-D", "FOREGROUND"]
