/**
 * Interfaz que representa un curso del sistema.
 */
export interface Course {
  /** Identificador único del curso */
  id: number;
  /** Título del curso */
  title: string;
  /** Instructor del curso */
  instructor: string;
  /** Duración en horas */
  duration: number;
  /** Nivel de dificultad del curso */
  level: CourseLevel;
}

/** Valores permitidos para el campo `level`. */
export type CourseLevel = 'Principiante' | 'Intermedio' | 'Avanzado';
