/**
 * @openapi
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       description: Representa un curso del sistema
 *       required:
 *         - id
 *         - title
 *         - instructor
 *         - duration
 *         - level
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: Arquitectura de Microfrontends
 *         instructor:
 *           type: string
 *           example: Juan Fernando Vargas
 *         duration:
 *           type: number
 *           example: 40
 *         level:
 *           type: string
 *           enum:
 *             - Principiante
 *             - Intermedio
 *             - Avanzado
 *           example: Avanzado
 */
export {};