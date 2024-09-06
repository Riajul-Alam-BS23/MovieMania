import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { MovieListsEffects } from './movie-list.effects';
import { MovieService } from '../../../services/movie.service';
import { MovieListsActions } from './movie-list.actions';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { Movie } from '../../../models/api/MovieResponse';
import { Type } from '../../../models/types/DetailsType';

describe('MovieListsEffects', () => {
    let actions$: Observable<any>;
    let effects: MovieListsEffects;
    let movieService: jasmine.SpyObj<MovieService>;

    beforeEach(() => {

        console.log("its execute before execute any testcases")

        const mockMovieServiceSpy = jasmine.createSpyObj('MovieService', ['getFiltersData']);

        TestBed.configureTestingModule({
            providers: [
                MovieListsEffects,
                provideMockActions(() => {
                    return actions$;
                }),
                { 
                    provide: MovieService, 
                    useValue: mockMovieServiceSpy 
                }
            ]
        });
        effects = TestBed.inject(MovieListsEffects);
        movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
    });
    
    describe('loadListsMovies$', () => {
        it('should return a loadListsMoviesSuccess action, with the movies on success', () => {
            console.log("movie lists test case 01")
            const movies :Type = {
                media: 'movie',
                page: 1,
                queryParams: 'page=1&sort_by=rating.desc&language=en-US&primary_release_date.lte=2025-02-28&vote_average.lte=10&with_runtime.gte=105&with_runtime.lte=420'
            }
            const response: PaginationResponse<Movie[]> = {
                page: 1,
                results: [{
                    id: 1,
                    title: 'Movie Title',
                    overview: 'Movie Overview',
                    poster_path: '/path/to/poster.jpg',
                    media_type: 'movie',
                    adult: false,
                    original_language: 'en',
                    genre_ids: [28,220],
                    popularity: 123.45,
                    video: false,
                    vote_average: 8.5,
                    vote_count: 100,
                }],
                total_pages: 1,
                total_results: 1
            };
            const action = MovieListsActions.loadListsMovies({ movies });
            const successAction = MovieListsActions.loadListsMoviesSuccess({ movies: response });

            actions$ = of(action);
            movieService.getFiltersData.and.returnValue(of(response));

            effects.loadListsMovies$.subscribe(result => {
                expect(result).toEqual(successAction);
            });
            // expect(movieService.getFiltersData).toHaveBeenCalledTimes(87);  
        });

        it('should return a loadListsMoviesFailure action, with the error on failure', () => {
            console.log("movie lists test case 02")

            const movies :Type = {
                media: 'movie',
                page: 1,
                queryParams: 'page=1&sort_by=rating.desc&language=en-US&primary_release_date.lte=2025-02-28&vote_average.lte=10&with_runtime.gte=105&with_runtime.lte=420'
            }
            const error = 'Some error related api call';
            const action = MovieListsActions.loadListsMovies({ movies });
            const failureAction = MovieListsActions.loadListsMoviesFailure({ error });

            actions$ = of(action);
            movieService.getFiltersData.and.returnValue(throwError(() => new Error(error)));

            effects.loadListsMovies$.subscribe(result => {
                expect(result).toEqual(failureAction);
            });
        });

        it('should return a loadListsMoviesSuccess action with an empty movies list if the response is empty', () => {
            console.log("Movie lists test case 03")

            const movies: Type = {
                media: 'movie',
                page: 1,
                queryParams: 'page=1&sort_by=rating.desc&language=en-US&primary_release_date.lte=2025-02-28&vote_average.lte=10&with_runtime.gte=105&with_runtime.lte=420'
            }
            const response: PaginationResponse<Movie[]> = {
                page: 1,
                results: [],
                total_pages: 1,
                total_results: 0
            };
            const action = MovieListsActions.loadListsMovies({ movies });
            const successAction = MovieListsActions.loadListsMoviesSuccess({ movies: response });

            actions$ = of(action);
            movieService.getFiltersData.and.returnValue(of(response));

            effects.loadListsMovies$.subscribe(result => {
                expect(result).toEqual(successAction);
            });
        });

        //was failed, fix it
        it('should handle null movie data gracefully and return a failure action', () => {
            console.log("Movie lists test case 06")

            const movies: Type = {
                media: 'movie',
                page: 1,
                queryParams: 'page=1&sort_by=rating.desc&language=en-US'
            };
            const action = MovieListsActions.loadListsMovies({ movies });
            const failureAction = MovieListsActions.loadListsMoviesFailure({ error: 'No data returned' });

            actions$ = of(action);
            movieService.getFiltersData.and.returnValue(of(null));

            effects.loadListsMovies$.subscribe(result => {
                expect(result).toEqual(failureAction);
            });
        });

        it('should handle large datasets correctly', () => {
            console.log("Movie lists test case 09")

            const movies: Type = {
                media: 'movie',
                page: 1,
                queryParams: 'page=1&sort_by=rating.desc&language=en-US'
            };
            const largeDataset: PaginationResponse<Movie[]> = {
                page: 1,
                results: Array.from({ length: 1000 }, (_, i) => ({
                    id: i,
                    title: `Movie Title ${i}`,
                    overview: 'Movie Overview',
                    poster_path: `/path/to/poster${i}.jpg`,
                    media_type: 'movie',
                    adult: false,
                    original_language: 'en',
                    genre_ids: [28, 220],
                    popularity: 123.45,
                    video: false,
                    vote_average: 8.5,
                    vote_count: 100,
                })),
                total_pages: 10,
                total_results: 10000
            };
            const action = MovieListsActions.loadListsMovies({ movies });
            const successAction = MovieListsActions.loadListsMoviesSuccess({ movies: largeDataset });

            actions$ = of(action);
            movieService.getFiltersData.and.returnValue(of(largeDataset));

            effects.loadListsMovies$.subscribe(result => {
                expect(result).toEqual(successAction);
            });
        });


        //was failed, fixed it
        it('should handle unexpected data types in the API response', () => {
            console.log("Movie lists test case 11")

            const movies: Type = {
                media: 'movie',
                page: 1,
                queryParams: 'page=1&sort_by=rating.desc&language=en-US'
            };
            const response: any = {
                page: 1,
                results: "unexpected_string_instead_of_array",
                total_pages: 1,
                total_results: 1
            };
            const action = MovieListsActions.loadListsMovies({ movies });
            const failureAction = MovieListsActions.loadListsMoviesFailure({ error: 'Unexpected data type' });

            actions$ = of(action);
            movieService.getFiltersData.and.returnValue(of(response));

            effects.loadListsMovies$.subscribe(result => {
                expect(result).toEqual(failureAction);
            });
        });




    });
});
