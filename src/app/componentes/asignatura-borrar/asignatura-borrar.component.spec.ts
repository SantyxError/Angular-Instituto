import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaBorrarComponent } from './asignatura-borrar.component';

describe('AsignaturaBorrarComponent', () => {
  let component: AsignaturaBorrarComponent;
  let fixture: ComponentFixture<AsignaturaBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
