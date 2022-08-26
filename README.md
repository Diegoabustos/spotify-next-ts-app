# Spotify Searcher App - Proyecto hecho en NextJS


__

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Herramientas necesarias para instalar el software y como instalarlas_

```
version node 14.0.0 en adelante y npm version 6 en adelante
```
_Recomendado tener última versión de yarn instalada ya que fue el manejador de dependencias locales usado para esté proyecto._

### Instalación 🔧
_Hacer clone de esté repositiorio._


_Instalación de dependencias mediante los siguientes comandos ubicado en la carpeta raíz del proyecto._

```
yarn o npm install
```

## Configuración

_El proyecto utiliza la API REST de Spotify https://developer.spotify.com/documentation/web-api/reference/#/  por lo que hay que utilizar un par de parametros: El client ID y el client Secret . Dichos valores son proporcionados al crearse una cuenta mediante la siguiente url: https://developer.spotify.com/dashboard/. Una vez teniendo los valores de client ID y client Secret debe crearse el archivo:_

```
.env.local
```
_Tomar de referencia el archivo:_

```
.env.example
```
_Y asignarle el client ID u el client Secret a las variables ubicadas en esté archivo_


### Compilación

_Ejecutando cualquiera de los siguientes comandos ubicandose en la raíz del proyecto:_

```
yarn dev o npm run dev
```
_El proyecto correra en el puerto 3000 (definido por defecto) por lo que hay que dirigirse ala url del navegador el http://localhost:3000/_


## Construido con 🛠️

_NextJs - Tailwindcss - typescript_

* [yarn](https://yarnpkg.com/) - Manejador de dependencias locales. 


## Autores ✒️


* **Diego Bustos** - *Trabajo Inicial* - [Diegoabustos](https://github.com/Diegoabustos/)