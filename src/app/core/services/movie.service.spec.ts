// import { TestBed } from '@angular/core/testing';

// import { MovieService } from './movie.service';

// describe('MovieService', () => {
//   let service: MovieService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(MovieService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { environment } from '../../../environments/environment';
import { PaginationResponse } from '../models/api/PaginationResponse';
import { Movie } from '../models/api/MovieResponse';
import { MovieDetails } from '../models/api/MovieDetailsResponse';
import { DataType, DetailsType, Type } from '../models/types/DetailsType';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch trending movies', () => {
    const mockResponse: PaginationResponse<Movie[]> = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    };
    const period = 'day';

    service.getTrendingMovies(period).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}/trending/all/${period}?language=en-US&page=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
