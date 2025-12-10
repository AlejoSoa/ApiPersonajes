import { TestBed } from '@angular/core/testing';

import { ApiDragonBall } from './api-dragon-ball';

describe('ApiDragonBall', () => {
  let service: ApiDragonBall;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDragonBall);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
