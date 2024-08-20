import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMoviesPopularLists } from '../../../core/store/movie-lists/popular/popular.selectors';
import { loadPopularListsMovies } from '../../../core/store/movie-lists/popular/popular.actions';
import { ListsType } from '../../../core/models/types/DetailsType';
import { loadTopRatedListsMovies } from '../../../core/store/movie-lists/top-rated/top-rated.actions';
import { selectMoviesTopRatedLists } from '../../../core/store/movie-lists/top-rated/top-rated.selectors';
import { loadNowPlayingListsMovies } from '../../../core/store/movie-lists/now-playing/now-playing.actions';
import { loadUpcomingListsMovies } from '../../../core/store/movie-lists/upcoming/upcoming.actions';
import { loadPopularListsTv } from '../../../core/store/tv-lists/popular/popular.actions';
import { loadTopRatedListsTv } from '../../../core/store/tv-lists/top-rated/top-rated.actions';
import { loadAiringTodayListsTv } from '../../../core/store/tv-lists/airing-today/airing-today.actions';
import { loadOnTvListsTv } from '../../../core/store/tv-lists/on-tv/on-tv.actions';
import { selectMoviesNowPlayingLists } from '../../../core/store/movie-lists/now-playing/now-playing.selectors';
import { selectMoviesUpcomingLists } from '../../../core/store/movie-lists/upcoming/upcoming.selectors';
import { selectTvPopularLists } from '../../../core/store/tv-lists/popular/popular.selectors';
import { selectTvTopRatedLists } from '../../../core/store/tv-lists/top-rated/top-rated.selectors';
import { selectTvAiringTodayLists } from '../../../core/store/tv-lists/airing-today/airing-today.selectors';
import { selectTvOnTvLists } from '../../../core/store/tv-lists/on-tv/on-tv.selectors';

@Injectable({
  providedIn: 'root'
})
export class MoviesFacadeService {

  constructor(
    private store:Store
  ) { }
  dispatchData(listType:ListsType){
    const listsActionMap={
      'movie/popular':loadPopularListsMovies,
      'movie/top_rated':loadTopRatedListsMovies,
      'movie/now_playing':loadNowPlayingListsMovies,
      'movie/upcoming':loadUpcomingListsMovies,
      'tv/popular':loadPopularListsTv,
      'tv/top_rated':loadTopRatedListsTv,
      'tv/airing_today':loadAiringTodayListsTv,
      'tv/on_the_air':loadOnTvListsTv
    };

    const actionKey=`${listType.media}/${listType.media_type}`;
    const action = listsActionMap[actionKey];
    if(action){
      this.store.dispatch(action({movies:listType}));
    }else {
      console.error('No matching action found for the provided media and media_type');
    }
  }
  getMovies(listType:ListsType){
    const listsSelectorMap={
      'movie/popular':selectMoviesPopularLists,
      'movie/top_rated':selectMoviesTopRatedLists,
      'movie/now_playing':selectMoviesNowPlayingLists,
      'movie/upcoming':selectMoviesUpcomingLists,
      'tv/popular':selectTvPopularLists,
      'tv/top_rated':selectTvTopRatedLists,
      'tv/airing_today':selectTvAiringTodayLists,
      'tv/on_the_air':selectTvOnTvLists
    }
    const selectorKey = `${listType.media}/${listType.media_type}`;
    const selector = listsSelectorMap[selectorKey];
    if(selector){
      return this.store.select(selector);
    }else{
      console.error('No matching selector found for the provided media and media_type');
      return null;
    }
  }
}
