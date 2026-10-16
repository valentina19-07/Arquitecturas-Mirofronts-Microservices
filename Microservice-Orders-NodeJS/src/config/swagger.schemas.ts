/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa un pedido del sistema
 *       required:
 *         - id
 *         - customer
 *         - product
 *         - quantity
 *         - total
 *         - status
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customer:
 *           type: string
 *           example: Carlos Ramírez
 *         product:
 *           type: string
 *           example: Teclado Mecánico
 *         quantity:
 *           type: number
 *           example: 2
 *         total:
 *           type: number
 *           example: 240000
 *         status:
 *           type: string
 *           enum:
 *             - Pendiente
 *             - Enviado
 *             - Entregado
 *             - Cancelado
 *           example: Pendiente
 *         date:
 *           type: string
 *           format: date
 *           example: 2026-10-01
 */
export {};