/**
 * Interfaz que representa un libro del sistema.
 *
 * @remarks
 * Es el contrato de datos que devuelve el microservicio de libros.
 * Todos los campos son obligatorios y están tipados de forma estricta.
 */
export interface Book {
  /** Identificador único del libro */
  id: number;
  /** Título del libro */
  title: string;
  /** Autor del libro */
  author: string;
  /** Año de publicación */
  year: number;
  /** Número de páginas */
  pages: number;
  /** Género literario del libro */
  genre: BookGenre;
}

/**
 * Valores permitidos para el campo `genre`.
 *
 * @remarks
 * Se usa para asignar un color de badge a cada valor en la tabla.
 */
export type BookGenre = 'Ficcion' | 'Ciencia' | 'Historia' | 'Tecnologia' | 'Biografia';
