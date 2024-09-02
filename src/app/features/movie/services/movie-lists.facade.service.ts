import { Injectable } from '@angular/core';
import { MovieService } from '../../../core/services/movie.service';
import { Type } from '../../../core/models/types/DetailsType';
import { Store } from '@ngrx/store';
import { genresListsMoviesFeature, selectGenres } from '../../../core/store/filters/genres/genres.state';
import { GenresListsMoviesActions } from '../../../core/store/filters/genres/genres.actions';
import { map, of, tap } from 'rxjs';
import { MovieListsActions } from '../../../core/store/movies/movie-list/movie-list.actions';
import { selectMovies } from '../../../core/store/movies/movie-list/movie-list.state';
import { TvListsActions } from '../../../core/store/movies/tv-list/tv-list.actions';
import { selectTvs, tvListsFeature } from '../../../core/store/movies/tv-list/tv-list.state';
import { genresListsTvsFeature } from '../../../core/store/filters/tv-genres/genres.state';
import { GenresListsTvsActions } from '../../../core/store/filters/tv-genres/genres.actions';

@Injectable({
  providedIn: 'root'
})
export class MovieListsFacadeService {

  constructor(
    private store:Store
  ) { }
  getGenresList(type:Type){
    if(type.media=='tv'){
      return this.store.select(genresListsTvsFeature.selectGenres)
    }
    return this.store.select(genresListsMoviesFeature.selectGenres);
  }
  dispatchGenres(genresRequest: Type) {
    if(genresRequest.media=='tv'){
      this.store.dispatch(GenresListsTvsActions.load({ genres: genresRequest }));
    }else{
      this.store.dispatch(GenresListsMoviesActions.load({ genres: genresRequest }));
    }
  }
  dispatchLists(request:Type){
    if(request.media=='movie'){
      this.store.dispatch(MovieListsActions.loadListsMovies({movies:request}));
    }
    else{
      this.store.dispatch(TvListsActions.loadListsTvs({tvs:request}));
    }
  }
  getLists(media:string){
    console.log("Call from Facade",media);
    return media=='movie'? this.store.select(selectMovies): this.store.select(selectTvs);
  }
}
