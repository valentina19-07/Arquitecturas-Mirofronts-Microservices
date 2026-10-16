import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { BookGenre, Book } from '../../interfaces/books.interface';

/**
 * Componente de tabla de libros.
 *
 * Se utiliza para mostrar un listado de libros en una tabla,
 * con un badge de color para el campo `genre`.
 *
 * @remarks
 * Este componente recibe los libros desde un componente padre
 * a través del Input `books` y utiliza el mapeo `genreMap`
 * para asignar colores a los badges.
 *
 * @example
 * ```html
 * <app-books-table [books]="booksList"></app-books-table>
 * ```
 */
@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  imports: [BadgeAtom],
})
export class BooksTableComponent {
  /**
   * Listado de libros que se mostrarán en la tabla.
   * @type {Book[]}
   */
  @Input() books: Book[] = [];

  /**
   * Mapeo del campo `genre` a tipos de Badge.
   * @type {Record<BookGenre, BadgeType>}
   * @remarks
   * - 'Ficcion' → 'primary'
   * - 'Ciencia' → 'success'
   * - 'Historia' → 'warning'
   * - 'Tecnologia' → 'danger'
   * - 'Biografia' → 'secondary'
   */
  genreMap: Record<BookGenre, BadgeType> = {
    'Ficcion': 'primary',
    'Ciencia': 'success',
    'Historia': 'warning',
    'Tecnologia': 'danger',
    'Biografia': 'secondary',
  };
}
