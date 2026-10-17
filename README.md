# 🧪 Taller: Microfrontends y Microservices en Angular y NodeJS

- Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.

- El objetivo del taller es practicar la creación de 2 proyectos para representar la arquitectura
cliente servidor, con las Tecnologias de Angular y NodeJS.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code

Puedes verificar Angular CLI en consola con: ```ng version```

### 1️⃣ Instalar Dependencias

- Ubícate en la raíz del proyecto de Client-Host-Angular y ejecuta el comando: ```npm i```
- Ubícate en la raíz del proyecto de Microfrontend-Users-Angular y ejecuta el comando: ```npm i```
- Ubícate en la raíz del proyecto de Microfrontend-Products-Angular y ejecuta el comando: ```npm i```
- Ubícate en la raíz del proyecto de Microservice-Users-NodeJS y ejecuta el comando: ```npm i```
- Ubícate en la raíz del proyecto de Microservice-Products-NodeJS y ejecuta el comando: ```npm i```


### 2️⃣ Ejecutar los Proyectos

- Ubícate en la raíz del proyecto de Microservice-Users-NodeJS y ejecuta el comando: ```npm run start```
- Ubícate en la raíz del proyecto de Microservice-Products-NodeJS y ejecuta el comando: ```npm run start```
- Ubícate en la raíz del proyecto de Microfrontend-Users-Angular y ejecuta el comando: ```npm run start```
- Ubícate en la raíz del proyecto de Microfrontend-Products-Angular y ejecuta el comando: ```npm run start```
- Ubícate en la raíz del proyecto de Client-Host-Angular y ejecuta el comando: ```npm run start```


### 3️⃣ Verificar Funcionamiento de Proyectos

#### Microservice-Users-NodeJS
- Corriendo en: ```http://localhost:3001```
- Swagger API Docs: ```http://localhost:3001/api/docs```
- API Users: ```http://localhost:3001/api/users/{countUsers}```

#### Microservice-Products-NodeJS
- Corriendo en: ```http://localhost:3002```
- Swagger API Docs: ```http://localhost:3002/api/docs```
- API Products: ```http://localhost:3002/api/users/{countProducts}```

#### Microfrontend-Users-Angular
- Corriendo en: ```http://localhost:4201```
- RemoteEntry: ```http://localhost:4201/remoteEntry.js```

#### Microfrontend-Products-Angular
- Corriendo en: ```http://localhost:4202```
- RemoteEntry: ```http://localhost:4202/remoteEntry.js```

#### Client-Host-Angular
- Corriendo en: ```http://localhost:4200```

#### Microservice-Orders-NodeJS
- Corriendo en: ```http://localhost:3003```
- Swagger API Docs: ```http://localhost:3003/api/docs```
- API Orders: ```http://localhost:3003/api/orders/{countOrders}```

#### Microservice-Courses-NodeJS
- Corriendo en: ```http://localhost:3004```
- Swagger API Docs: ```http://localhost:3004/api/docs```
- API Courses: ```http://localhost:3004/api/courses/{countCourses}```

#### Microservice-Books-NodeJS
- Corriendo en: ```http://localhost:3005```
- Swagger API Docs: ```http://localhost:3005/api/docs```
- API Books: ```http://localhost:3005/api/books/{countBooks}```

#### Microfrontend-Orders-Angular
- Corriendo en: ```http://localhost:4203```
- RemoteEntry: ```http://localhost:4203/remoteEntry.js```

#### Microfrontend-Courses-Angular
- Corriendo en: ```http://localhost:4204```
- RemoteEntry: ```http://localhost:4204/remoteEntry.js```

#### Microfrontend-Books-Angular
- Corriendo en: ```http://localhost:4205```
- RemoteEntry: ```http://localhost:4205/remoteEntry.js```

### Pruebas y documentación
- Pruebas con cobertura (en cada microfront): ```npm run test:coverage```
- Documentación técnica con Compodoc (en cada microfront): ```npm run compodoc```