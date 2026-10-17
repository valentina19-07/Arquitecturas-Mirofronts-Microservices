/**
 * Interfaz que representa un curso del sistema.
 *
 * @remarks
 * Es el contrato de datos que devuelve el microservicio de cursos.
 * Todos los campos son obligatorios y están tipados de forma estricta.
 */
export interface Course {
  /** Identificador único del curso */
  id: number;
  /** Título del curso */
  title: string;
  /** Instructor del curso */
  instructor: string;
  /** Duración en horas del curso */
  duration: number;
  /** Nivel de dificultad del curso */
  level: CourseLevel;
}

/**
 * Valores permitidos para el campo `level`.
 *
 * @remarks
 * Se usa para asignar un color de badge a cada valor en la tabla.
 */
export type CourseLevel = 'Principiante' | 'Intermedio' | 'Avanzado';
