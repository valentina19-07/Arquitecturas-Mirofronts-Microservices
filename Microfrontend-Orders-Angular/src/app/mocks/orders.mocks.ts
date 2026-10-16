import { Order } from "../interfaces/orders.interface";

export const ORDERS_MOCK: Order[] = [
    {
      id: 1,
      customer: 'Carlos Ramírez',
      product: 'Teclado Mecánico',
      quantity: 2,
      total: 240000,
      status: 'Pendiente',
      date: '2026-10-01',
    },
    {
      id: 2,
      customer: 'Ana Gómez',
      product: 'Monitor 24"',
      quantity: 1,
      total: 650000,
      status: 'Entregado',
      date: '2026-09-28',
    }
];
