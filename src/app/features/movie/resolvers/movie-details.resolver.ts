import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { MovieService } from '../../../core/services/movie.service';
import { Store } from '@ngrx/store';
import { loadMovieDetails } from '../../../core/store/movie/movie-details/movie-details.actions';
import { selectMovieDetails, selectMovieDetailsLoading } from '../../../core/store/movie/movie-details/movie-details.selectors';
import { MovieDetails } from '../../../core/models/api/MovieDetailsResponse';
import { DetailsType } from '../../../core/models/types/DetailsType';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<any> {
  constructor(private movieService: MovieService,private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails> {

    const movieId = Number(route.paramMap.get('id'));
    const type = route.paramMap.get('type');
    const detailsType:DetailsType={
      id: movieId,
      media_type: type
    }

    return this.store.pipe(
      tap(() => this.store.dispatch(loadMovieDetails({ details:detailsType }))),
      switchMap(() =>
        this.store.select(selectMovieDetailsLoading)
      ),
      switchMap(() =>
        this.store.select(selectMovieDetails)
      ),
      catchError(error => {
        console.error('Error loading movie details:', error);
        return of(null);
      })
    );
  }
}







