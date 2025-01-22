 Docker Apache PHP con SSL Debian

Este proyecto proporciona una configuración de Docker para ejecutar un servidor Apache con PHP y SSL habilitado sobre una imagen base de Debian. El objetivo de este contenedor es servir un sitio web con soporte HTTPS utilizando certificados SSL auto-firmados.

## Autor

- **Nombre**: Ramón Moreno Albert
- **Escuela**: IES Paco Mollà de Petrer
- **Ciclo**: Segundo curso DAW del ciclo superior

## Descripción

Este contenedor Docker ejecuta una imagen de Debian con Apache y PHP configurados, habilitando SSL para servir contenido de manera segura. El contenedor sirve un sitio web estático ubicado en `/var/www/html/web1/public_html`, junto con los certificados SSL necesarios para habilitar HTTPS.

Este proyecto es una práctica para el ciclo de Desarrollo de Aplicaciones Web (DAW) en el IES Paco Mollà.

## Requisitos

- **Docker**: Asegúrate de tener Docker instalado en tu máquina. Si no lo tienes, puedes seguir la documentación oficial para instalarlo: [Docker Install](https://docs.docker.com/get-docker/).

## Instalación

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/ej2apache_php.git
cd ej2apache_php

2. Construir la imagen Docker

En el directorio del proyecto, ejecuta el siguiente comando para construir la imagen Docker desde el Dockerfile:

sudo docker build -t ej2apache_php:1 .

Esto descargará las dependencias necesarias, instalará Apache, habilitará SSL y copiará los archivos necesarios al contenedor.
3. Ejecutar el contenedor

Una vez que la imagen esté construida, ejecuta el contenedor con:

sudo docker run -d -p 8080:80 -p 443:443 --name mi-contenedor-web1 ej2apache_php:1

Esto ejecutará el contenedor en segundo plano, exponiendo los puertos 80 (HTTP) y 443 (HTTPS) en tu máquina local.

Nota: Si el puerto 443 ya está siendo utilizado por otro servicio en tu máquina, puedes cambiar el puerto de la siguiente manera:

sudo docker run -d -p 8080:80 -p 8443:443 --name mi-contenedor-web1 ej2apache_php:1

Esto hará que el contenedor utilice el puerto 8443 en lugar del puerto 443.
Acceso al sitio web

Una vez que el contenedor esté en funcionamiento, podrás acceder a tu sitio web de la siguiente manera:

    HTTP: http://web1.com:8080/ o http://web1.com:8080/phpinfo.php
    HTTPS: https://web1.com:443/ o https://web1.com:443/phpinfo.php
        Si cambiaste el puerto: https://web1.com:8443/ o https://web1.com:8443/phpinfo.php

Advertencia

El certificado SSL utilizado es auto-firmado, por lo que los navegadores mostrarán una advertencia de seguridad. Esto es normal para un entorno de desarrollo y se puede omitir la advertencia.
Detalles técnicos

    Apache está configurado para servir contenido desde /var/www/html/web1/public_html.
    PHP está habilitado por defecto en el contenedor.
    El archivo web1.com.conf configura un VirtualHost para el dominio web1.com y habilita SSL con los certificados proporcionados en web1/tls/certs/ y web1/tls/private/.

Archivo web1.com.conf

Este archivo configura el VirtualHost tanto para HTTP como para HTTPS:

<VirtualHost *:80 *:443>
    ServerAdmin ramonmoreno.alu@iespacomolla.es
    ServerName web1.com
    ServerAlias www.web1.com web1.es
    DocumentRoot /var/www/html/web1/public_html

    <Directory /var/www/html/web1/public_html>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error-web1.log
    CustomLog ${APACHE_LOG_DIR}/access-web1.log combined

    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/apache2/tls/certs/ca_web1.crt
    SSLCertificateKeyFile /etc/apache2/tls/private/ca_web1.key
</VirtualHost>

Problemas comunes
El puerto 443 está ocupado

Si obtienes el error bind: address already in use, otro servicio está utilizando el puerto 443. Asegúrate de que no haya otro servidor web ejecutándose o cambia el puerto del contenedor.
Advertencia de certificado SSL

Dado que se está utilizando un certificado auto-firmado, los navegadores te advertirán que el certificado no es válido. Esto es normal en entornos de desarrollo.
Es necesario permitir informar al navegador sobre cómo resolver el dominio web1.com

Si estás trabajando en un entorno local, debes agregar una entrada en el archivo de hosts de tu máquina para que se resuelva el dominio web1.com correctamente:

    Linux/macOS: Edita el archivo /etc/hosts y agrega la siguiente línea:

127.0.0.1 web1.com

Esto hará que web1.com apunte a tu máquina local.
