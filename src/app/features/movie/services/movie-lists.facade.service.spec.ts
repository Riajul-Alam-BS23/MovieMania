import { TestBed } from '@angular/core/testing';

import { MovieListsFacadeService } from './movie-lists.facade.service';

describe('MovieListsService', () => {
  let service: MovieListsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieListsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
