import { TestBed } from '@angular/core/testing';

import { AuthLimaGuard } from './auth-lima.guard';

describe('AuthLimaGuard', () => {
  let guard: AuthLimaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLimaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
