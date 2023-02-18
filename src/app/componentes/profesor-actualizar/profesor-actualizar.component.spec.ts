import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorActualizarComponent } from './profesor-actualizar.component';

describe('ProfesorActualizarComponent', () => {
  let component: ProfesorActualizarComponent;
  let fixture: ComponentFixture<ProfesorActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
