import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { COURSES_MOCK } from '../../mocks/courses.mocks';
import { CoursesTableComponent } from './courses-table.component';

describe('CoursesTableComponent', () => {
  let component: CoursesTableComponent;
  let fixture: ComponentFixture<CoursesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('no debería renderizar filas si no hay cursos', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(0);
  });

  it('debería renderizar una fila por cada curso', () => {
    component.courses = COURSES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.courses.length);
  });

  it('debería mostrar los datos del curso en cada columna', () => {
    component.courses = COURSES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const course = component.courses[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(course.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(course.title);
      expect(columns[2].nativeElement.textContent.trim()).toBe(course.instructor);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(course.duration));
    });
  });

  it('debería mostrar el badge con el valor de level', () => {
    component.courses = COURSES_MOCK;
    fixture.detectChanges();

    const badges = fixture.debugElement.queryAll(By.css('dsb-badge-atom'));
    expect(badges.length).toBe(COURSES_MOCK.length);
  });

  it('debería mapear cada valor de level a su BadgeType correcto', () => {
    expect(component.levelMap['Principiante']).toBe('success');
    expect(component.levelMap['Intermedio']).toBe('warning');
    expect(component.levelMap['Avanzado']).toBe('danger');
  });

});
