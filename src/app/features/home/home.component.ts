import { Component } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { select, Store } from '@ngrx/store';
import * as MovieActions from '../../core/store/home/trending/trending.actions';
import * as MovieSelectors from '../../core/store/home/trending/trending.selectors';
import * as PopularMovieActions from '../../core/store/home/popular/popular.actions';
import * as PopularMovieSelectors from '../../core/store/home/popular/popular.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  movies$:Observable<any>;
  popularMovies$: Observable<any>;

  activeTrendingMovies: string = 'day';
  activePopularMovies: string = 'tv';

  defaultSelectedTrendingMovies:boolean;
  defaultSelectedPopularMovies:boolean;

  constructor(private movieService:MovieService,private store:Store){
  }
ngOnInit():void{
    // console.log(this.movieService.getSingleMovie(718821));
    this.store.dispatch(MovieActions.loadTrendingMovies({ period: this.activeTrendingMovies }));
    this.store.dispatch(MovieActions.loadTrendingMovies({period:'day'}));
    // this.movies$=this.store.pipe(
    //   select(MovieSelectors.selectTrendingMovies)
    // )
    this.movies$=this.store.select(MovieSelectors.selectTrendingMovies);
    // popular
    this.store.dispatch(PopularMovieActions.loadPopularMovies({ period: this.activePopularMovies }));
    this.store.dispatch(PopularMovieActions.loadPopularMovies({period:'movie'}));
    // this.popularMovies$=this.store.pipe(hu08.l     //   select(PopularMovieSelectors.selectPopularMovies)
    // )
    this.popularMovies$=this.store.select(PopularMovieSelectors.selectPopularMovies);
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
