import { Routes } from '@angular/router';
import { BooksPage } from './pages/books/books.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * @see {@link BooksPage}
 */
export const routes: Routes = [
  /**
   * Ruta de libros.
   *
   * @remarks
   * Renderiza el componente `BooksPage`, encargado
   * de mostrar y gestionar el listado de libros.
   */
  { path: '', loadComponent: () => import('./pages/books/books.page').then((m) => m.BooksPage)},
];