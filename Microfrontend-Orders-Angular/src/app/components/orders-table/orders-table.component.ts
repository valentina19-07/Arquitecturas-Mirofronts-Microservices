import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { OrderStatus, Order } from '../../interfaces/orders.interface';

/**
 * Componente de tabla de pedidos.
 *
 * Se utiliza para mostrar un listado de pedidos en una tabla,
 * con un badge de color para el campo `status`.
 *
 * @remarks
 * Este componente recibe los pedidos desde un componente padre
 * a través del Input `orders` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges.
 *
 * @example
 * ```html
 * <app-orders-table [orders]="ordersList"></app-orders-table>
 * ```
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [BadgeAtom, CurrencyPipe],
})
export class OrdersTableComponent {
  /**
   * Listado de pedidos que se mostrarán en la tabla.
   * @type {Order[]}
   */
  @Input() orders: Order[] = [];

  /**
   * Mapeo del campo `status` a tipos de Badge.
   * @type {Record<OrderStatus, BadgeType>}
   * @remarks
   * - 'Pendiente' → 'warning'
   * - 'Enviado' → 'primary'
   * - 'Entregado' → 'success'
   * - 'Cancelado' → 'danger'
   */
  statusMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'Enviado': 'primary',
    'Entregado': 'success',
    'Cancelado': 'danger',
  };
}
