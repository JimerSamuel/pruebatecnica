import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEstudiantesComponent } from './ingreso-estudiantes.component';

describe('IngresoEstudiantesComponent', () => {
  let component: IngresoEstudiantesComponent;
  let fixture: ComponentFixture<IngresoEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
