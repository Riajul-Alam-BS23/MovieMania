import { Component } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { select, Store } from '@ngrx/store';
import * as MovieActions from '../../core/store/home/trending/trending.actions';
import * as MovieSelectors from '../../core/store/home/trending/trending.selectors';
import * as PopularMovieActions from '../../core/store/home/popular/popular.actions';
import * as PopularMovieSelectors from '../../core/store/home/popular/popular.selectors';
// import * as MovieListsActions from '../../core/store/movies/movies/movies.actions';
// import * as MovieListsSelectors from '../../core/store/movies/movies/movies.selectors'

import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  movies:any;
  movies$:Observable<any>;
  popularMovies$: Observable<any>;

  activeTrendingMovies: string = 'day';
  activePopularMovies: string = 'movie';

  defaultSelectedTrendingMovies:boolean;
  defaultSelectedPopularMovies:boolean;

  constructor(private movieService:MovieService,private store:Store){
  }
ngOnInit():void{
    this.store.dispatch(MovieActions.loadTrendingMovies({ period: this.activeTrendingMovies }));
    this.store.dispatch(PopularMovieActions.loadPopularMovies({ period: this.activePopularMovies }));

    // this.store.dispatch(MovieActions.loadTrendingMovies({period:'day'}));
    // this.movies$=this.store.pipe(
    //   select(MovieSelectors.selectTrendingMovies)
    // )
    this.movies$=this.store.select(MovieSelectors.selectTrendingMovies);
    this.popularMovies$=this.store.select(PopularMovieSelectors.selectPopularMovies);

    // popular
    // this.store.dispatch(PopularMovieActions.loadPopularMovies({period:'movie'}));
    // this.popularMovies$=this.store.pipe(hu08.l     //   select(PopularMovieSelectors.selectPopularMovies)
    // )
    // this.movies$.subscribe((data) => {
    //   console.log('Data from Home page ==>>', data);
    // });



    // testing
    // this.store.dispatch(MovieListsActions.loadListsByType({ dataType: {
    //   media_type:'movie',
    //   media_type_type: 'top_rated',
    //   page: 1
    // } }));
    // const moviesTests$=this.store.select(MovieListsSelectors.selectMovieLists);
    // console.log("Data testing ==>> ",moviesTests$)

  }


  toggleTrendingMovies(period: string) {
    this.activeTrendingMovies = period;
    this.defaultSelectedTrendingMovies = !this.defaultSelectedTrendingMovies;
    this.store.dispatch(MovieActions.loadTrendingMovies({ period }));
  }
  togglePopularMovies(period: string) {
    this.activePopularMovies = period;
    this.defaultSelectedPopularMovies = !this.defaultSelectedPopularMovies;
    this.store.dispatch(PopularMovieActions.loadPopularMovies({ period }));
  }

}
