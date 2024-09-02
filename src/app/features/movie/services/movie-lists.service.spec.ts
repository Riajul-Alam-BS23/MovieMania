import { TestBed } from '@angular/core/testing';

import { MovieListsService } from './movie-lists.service';

describe('MovieListsService', () => {
  let service: MovieListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
