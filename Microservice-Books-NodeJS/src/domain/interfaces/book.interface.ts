/**
 * Interfaz que representa un libro del sistema.
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

/** Valores permitidos para el campo `genre`. */
export type BookGenre = 'Ficcion' | 'Ciencia' | 'Historia' | 'Tecnologia' | 'Biografia';
