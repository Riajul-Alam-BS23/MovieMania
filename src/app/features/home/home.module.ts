import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material';
import { FormsModule } from '@angular/forms';
import { MoviesCarouselComponent } from './components/movie-carousel/movie-carousel.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { TrendingMovieEffects } from '../../core/store/home/trending/trending.effects';
// import { MOVIE_STATE_NAME } from '../../core/store/home/trending/trending.selectors';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeEffects, homeReducer } from '../../core/store/home/home.state';
import { PopularMovieEffects } from '../../core/store/home/popular/popular.effects';
import { Trending_MOVIE_STATE_NAME } from '../../core/store/home/trending/trending.selectors';
import { trendingMovieReducer } from '../../core/store/home/trending/trending.reducer';
import { popularMovieReducer } from '../../core/store/home/popular/popular.reducer';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesCarouselComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    EffectsModule.forFeature(HomeEffects),
    StoreModule.forFeature('home',homeReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    RouterModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }





