import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoActualizarComponent } from './alumno-actualizar.component';

describe('AlumnoActualizarComponent', () => {
  let component: AlumnoActualizarComponent;
  let fixture: ComponentFixture<AlumnoActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
