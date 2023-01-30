import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoBorrarComponent } from './alumno-borrar.component';

describe('AlumnoBorrarComponent', () => {
  let component: AlumnoBorrarComponent;
  let fixture: ComponentFixture<AlumnoBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
