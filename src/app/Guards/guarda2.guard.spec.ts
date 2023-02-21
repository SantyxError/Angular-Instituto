import { TestBed } from '@angular/core/testing';

import { Guarda2Guard } from './guarda2.guard';

describe('Guarda2Guard', () => {
  let guard: Guarda2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Guarda2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
