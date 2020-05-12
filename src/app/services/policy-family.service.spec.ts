import { TestBed } from '@angular/core/testing';

import { PolicyFamilyService } from './policy-family.service';

describe('PolicyFamilyService', () => {
  let service: PolicyFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
