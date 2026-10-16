import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from "../../../domain/interfaces/order.interface";

/**
 * Servicio encargado de la generación y gestión de pedidos.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar pedidos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class OrdersService {

  /**
   * Estados disponibles para los pedidos.
   */
  private orderStatuses: OrderStatus[] = [
    'Pendiente',
    'Enviado',
    'Entregado',
    'Cancelado',
  ];

  /**
   * Obtiene un listado de pedidos generados dinámicamente.
   *
   * @param countOrders Cantidad de pedidos a generar
   * @returns Promesa que resuelve un arreglo de pedidos
   *
   * @example
   * ```ts
   * const orders = await ordersService.getAllOrders(5);
   * ```
   */
  public async getAllOrders(countOrders: number): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
   * Genera un pedido ficticio.
   *
   * @param id Identificador único del pedido
   * @returns Promesa que resuelve un pedido generado
   */
  private generateOrder(id: number): Promise<Order> {
    const quantity = faker.number.int({ min: 1, max: 10 });
    const unitPrice = faker.number.int({ min: 20000, max: 250000 });
    const total = quantity * unitPrice;
    const date = faker.date.recent({ days: 30 }).toISOString().split('T')[0] || '';

    return Promise.resolve({
      id,
      customer: faker.person.fullName(),
      product: faker.commerce.productName(),
      quantity,
      total,
      status: faker.helpers.arrayElement(this.orderStatuses),
      date,
    });
  }
}
