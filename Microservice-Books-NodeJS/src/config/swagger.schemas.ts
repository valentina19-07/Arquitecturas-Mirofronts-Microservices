/**
 * @openapi
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       description: Representa un libro del sistema
 *       required:
 *         - id
 *         - title
 *         - author
 *         - year
 *         - pages
 *         - genre
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: Cien años de soledad
 *         author:
 *           type: string
 *           example: Gabriel García Márquez
 *         year:
 *           type: number
 *           example: 1967
 *         pages:
 *           type: number
 *           example: 417
 *         genre:
 *           type: string
 *           enum:
 *             - Ficcion
 *             - Ciencia
 *             - Historia
 *             - Tecnologia
 *             - Biografia
 *           example: Ficcion
 */
export {};