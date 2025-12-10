import { TestBed } from '@angular/core/testing';

import { ApiSimpson } from './api-simpson';

describe('ApiSimpson', () => {
  let service: ApiSimpson;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSimpson);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
