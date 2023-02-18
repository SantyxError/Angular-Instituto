import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorBorrarComponent } from './profesor-borrar.component';

describe('ProfesorBorrarComponent', () => {
  let component: ProfesorBorrarComponent;
  let fixture: ComponentFixture<ProfesorBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
