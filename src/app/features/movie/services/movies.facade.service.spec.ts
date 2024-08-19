import { TestBed } from '@angular/core/testing';

import { MoviesFacadeService } from './movies.facade.service';

describe('MoviesFacadeService', () => {
  let service: MoviesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
