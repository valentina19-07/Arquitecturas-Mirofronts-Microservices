/**
 * Interfaz que representa un pedido del sistema.
 *
 * @remarks
 * Es el contrato de datos que devuelve el microservicio de pedidos.
 * Todos los campos son obligatorios y están tipados de forma estricta.
 */
export interface Order {
  /** Identificador único del pedido */
  id: number;
  /** Nombre del cliente que realizó el pedido */
  customer: string;
  /** Producto solicitado */
  product: string;
  /** Cantidad de unidades pedidas */
  quantity: number;
  /** Valor total del pedido */
  total: number;
  /** Estado actual del pedido */
  status: OrderStatus;
  /** Fecha del pedido en formato YYYY-MM-DD */
  date: string;
}

/**
 * Valores permitidos para el campo `status`.
 *
 * @remarks
 * Se usa para asignar un color de badge a cada valor en la tabla.
 */
export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';