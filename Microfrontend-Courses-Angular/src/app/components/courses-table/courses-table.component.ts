import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CourseLevel, Course } from '../../interfaces/courses.interface';

/**
 * Componente de tabla de cursos.
 *
 * Se utiliza para mostrar un listado de cursos en una tabla,
 * con un badge de color para el campo `level`.
 *
 * @remarks
 * Este componente recibe los cursos desde un componente padre
 * a través del Input `courses` y utiliza el mapeo `levelMap`
 * para asignar colores a los badges.
 *
 * @example
 * ```html
 * <app-courses-table [courses]="coursesList"></app-courses-table>
 * ```
 */
@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  imports: [BadgeAtom],
})
export class CoursesTableComponent {
  /**
   * Listado de cursos que se mostrarán en la tabla.
   * @type {Course[]}
   */
  @Input() courses: Course[] = [];

  /**
   * Mapeo del campo `level` a tipos de Badge.
   * @type {Record<CourseLevel, BadgeType>}
   * @remarks
   * - 'Principiante' → 'success'
   * - 'Intermedio' → 'warning'
   * - 'Avanzado' → 'danger'
   */
  levelMap: Record<CourseLevel, BadgeType> = {
    'Principiante': 'success',
    'Intermedio': 'warning',
    'Avanzado': 'danger',
  };
}
