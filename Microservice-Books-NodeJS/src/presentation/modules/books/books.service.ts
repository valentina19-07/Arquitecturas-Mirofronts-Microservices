import { Book, BookGenre } from "../../../domain/interfaces/book.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación de libros.
 *
 * @remarks
 * Utiliza la librería `faker` para generar datos ficticios,
 * con fines de prueba y demostración.
 */
export class BooksService {

  /** Valores posibles del campo `genre`. */
  private BookGenres: BookGenre[] = [
    'Ficcion',
    'Ciencia',
    'Historia',
    'Tecnologia',
    'Biografia',
  ];

  /**
   * Obtiene un listado de libros generados dinámicamente.
   *
   * @param countBooks Cantidad de libros a generar
   * @returns Promesa que resuelve un arreglo de libros
   */
  public async getAllBooks(countBooks: number): Promise<Book[]> {
    const books: Promise<Book>[] = [];

    for (let i = 1; i <= countBooks; i++) {
      books.push(this.generateBook(i));
    }

    return Promise.all(books);
  }

  /**
   * Genera un libro ficticio.
   *
   * @param id Identificador único del libro
   * @returns Promesa que resuelve un libro generado
   */
  private generateBook(id: number): Promise<Book> {
    return Promise.resolve({
      id,
      title: faker.book.title(),
      author: faker.person.fullName(),
      year: faker.number.int({ min: 1950, max: 2025 }),
      pages: faker.number.int({ min: 80, max: 900 }),
      genre: faker.helpers.arrayElement(this.BookGenres),
    });
  }
}
