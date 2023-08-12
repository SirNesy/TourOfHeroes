import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { heroDetailGuard } from './hero-detail.guard';

describe('heroDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => heroDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
