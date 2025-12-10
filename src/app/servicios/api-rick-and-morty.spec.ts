import { TestBed } from '@angular/core/testing';

import { ApiRickAndMorty } from './api-rick-and-morty';

describe('ApiRickAndMorty', () => {
  let service: ApiRickAndMorty;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRickAndMorty);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
