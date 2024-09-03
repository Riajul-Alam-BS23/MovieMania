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

  it('should fetch popular movies', () => {
    const mockResponse: PaginationResponse<Movie[]> = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    };
    const period = 'movie';

    service.getPopularMovies(period).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}/${period}/popular?language=en-US&page=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch a single movie', () => {
    const mockResponse: MovieDetails = {
        adult: false,
        backdrop_path: '/path/to/backdrop.jpg',
        belongs_to_collection: null,
        budget: 100000000,
        genres: [],
        homepage: 'https://example.com',
        id: 1,
        imdb_id: 'tt1234567',
        origin_country: ['US'],
        original_language: 'en',
        original_title: 'Test Movie Original Title',
        overview: 'Test Overview',
        popularity: 10.0,
        poster_path: '/path/to/poster.jpg',
        production_companies: [],
        production_countries: [],
        release_date: '2023-01-01',
        revenue: 200000000,
        runtime: 120,
        spoken_languages: [],
        status: 'Released',
        tagline: 'Test Tagline',
        title: 'Test Movie',
        video: false,
        vote_average: 7.5,
        vote_count: 1000
    };
    const type: DetailsType = {
      media_type: 'movie',
      id: 1
    };

    service.getSingleMovie(type).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}/${type.media_type}/${type.id}?language=en-US`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch recommended movies', () => {
    const mockResponse: PaginationResponse<Movie[]> = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    };
    const movies = { media_type: 'movie', id: 1 };

    service.getRecommendationsMovies(movies).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}/${movies.media_type}/${movies.id}/recommendations?language=en-US&page=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch movie lists', () => {
    const mockResponse: PaginationResponse<Movie[]> = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    };
    const media_type = 'movie';
    const media_type_type = 'popular';
    const page = 1;

    service.getMovieLists(media_type, media_type_type, page).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}/${media_type}/${media_type_type}?language=en-US&page=${page}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch list movies', () => {
    const mockResponse: PaginationResponse<Movie[]> = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    };
    const listsType: DataType = {
      media: 'movie',
      media_type: 'popular',
      page: 1
    };

    service.getListsMovies(listsType).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}/${listsType.media}/${listsType.media_type}?language=en-US&page=${listsType.page}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch genres', () => {
    const mockResponse = {
      genres: []
    };
    const type: Type = {
      media: 'movie'
    };

    service.getGenres(type).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}/genre/${type.media}/list?language=en-US`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch filtered data', () => {
    const mockResponse = {
      results: []
    };
    const type: Type = {
      media: 'movie',
      queryParams: 'sort_by=popularity.desc'
    };

    service.getFiltersData(type).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}/discover/${type.media}?${type.queryParams}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
