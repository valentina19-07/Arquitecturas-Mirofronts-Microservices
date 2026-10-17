import { Course, CourseLevel } from "../../../domain/interfaces/course.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación de cursos.
 *
 * @remarks
 * Utiliza la librería `faker` para generar datos ficticios,
 * con fines de prueba y demostración.
 */
export class CoursesService {

  /** Valores posibles del campo `level`. */
  private courseLevels: CourseLevel[] = [
    'Principiante',
    'Intermedio',
    'Avanzado',
  ];

  /** Títulos predefinidos para los cursos */
  private courseTitles: string[] = [
    'Arquitectura de Microfrontends',
    'Desarrollo Web Moderno con Angular',
    'Microservicios con Node.js y Express',
    'Fundamentos de TypeScript y Patrones de Diseño',
    'Bases de Datos Relacionales y NoSQL',
    'DevOps y Despliegue Continuo con Docker',
    'Seguridad Web y Autenticación con JWT',
    'Testing Unitario y de Integración con Jest',
  ];

  /**
   * Obtiene un listado de cursos generados dinámicamente.
   *
   * @param countCourses Cantidad de cursos a generar
   * @returns Promesa que resuelve un arreglo de cursos
   */
  public async getAllCourses(countCourses: number): Promise<Course[]> {
    const courses: Promise<Course>[] = [];

    for (let i = 1; i <= countCourses; i++) {
      courses.push(this.generateCourse(i));
    }

    return Promise.all(courses);
  }

  /**
   * Genera un curso ficticio.
   *
   * @param id Identificador único del curso
   * @returns Promesa que resuelve un curso generado
   */
  private generateCourse(id: number): Promise<Course> {
    return Promise.resolve({
      id,
      title: faker.helpers.arrayElement(this.courseTitles),
      instructor: faker.person.fullName(),
      duration: faker.number.int({ min: 10, max: 120 }),
      level: faker.helpers.arrayElement(this.courseLevels),
    });
  }
}
