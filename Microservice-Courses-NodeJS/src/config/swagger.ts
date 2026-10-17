import swaggerJsdoc from 'swagger-jsdoc';

/**
 * Especificación de Swagger (OpenAPI) para la API de Cursos.
 */
export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Microservicio de Cursos',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3004',
      },
    ],
  },
  apis: [
    './src/presentation/modules/**/*.routes.ts',
    './src/config/swagger.schemas.ts',
  ],
});