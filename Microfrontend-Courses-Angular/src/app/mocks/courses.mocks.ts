import { Course } from "../interfaces/courses.interface";

/**
 * Listado de cursos simulados para pruebas y demostración.
 *
 * @remarks
 * Contiene datos ficticios que implementan la interfaz {@link Course}.
 * Se utiliza principalmente para pruebas unitarias de componentes y servicios.
 *
 * @type {Course[]}
 */
export const COURSES_MOCK: Course[] = [
    {
      id: 1,
      title: 'Arquitectura de Microfrontends',
      instructor: 'Juan Fernando Vargas',
      duration: 40,
      level: 'Avanzado',
    },
    {
      id: 2,
      title: 'Desarrollo Web con Angular',
      instructor: 'Valentina González',
      duration: 30,
      level: 'Intermedio',
    }
];
