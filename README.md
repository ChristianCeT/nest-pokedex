<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrolllo

1. Clonar el repositorio
2. Ejecutar el comando de:

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia **.env**

6. Llenar las variables de entorno definidas en el `.env`

7. Ejecutar la aplicasción en dev:

```
yarn start:dev | npm run start:dev
```

8. Reconstruir la base de datos con la semilla

```

http://localhost:3000/api/v2/seed

```

## Stack usado

- MongoDB
- NestJS

# Production Build

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno para producción
3. Crear la nueva imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Notas

- Si desea actualizar algún cambio sin reconstruir la imagen de producción ejecutar

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```
