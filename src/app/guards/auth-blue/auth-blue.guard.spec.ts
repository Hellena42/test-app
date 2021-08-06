import { TestBed } from '@angular/core/testing';

import { AuthBlueGuard } from './auth-blue.guard';

describe('AuthBlueGuard', () => {
  let guard: AuthBlueGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthBlueGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
