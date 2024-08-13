import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { movieDetailsResolver } from './movie-details.resolver';

describe('movieDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => movieDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
