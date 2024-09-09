import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListsRoutingModule } from './movie-lists-routing.module';
import { MaterialModule } from '../../../../material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {  MoviesEffects, moviesReducer} from '../../../../core/store/movies/movies.state';
import { MovieListsComponent } from '../../components/movie-lists/movie-lists.component';
import { MovieListsCardComponent } from '../../../../shared/components/movie-lists-card/movie-lists-card.component';
import { SharedModule } from '../../../../shared/shared.module';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { genresListsMoviesFeature } from '../../../../core/store/filters/genres/genres.state';
import { movieListsFeature } from '../../../../core/store/movies/movie-list/movie-list.state';
import { tvListsFeature } from '../../../../core/store/movies/tv-list/tv-list.state';
import { genresListsTvsFeature } from '../../../../core/store/filters/tv-genres/genres.state';


@NgModule({
  declarations: [
    MovieListsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MovieListsRoutingModule,
    MaterialModule,
    SharedModule,
    EffectsModule.forFeature(MoviesEffects),
    StoreModule.forFeature('movies',moviesReducer),
    StoreModule.forFeature(genresListsMoviesFeature),
    StoreModule.forFeature(genresListsTvsFeature),
    StoreModule.forFeature(movieListsFeature),
    StoreModule.forFeature(tvListsFeature),

    
    // StoreModule.forFeature('movies1', moviesReducer1),
    // EffectsModule.forFeature(MoviesEffects1),
    // EffectsModule.forFeature(MoviesEffects),
    // StoreModule.forFeature(combinedFeature),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    FormsModule,
  ]
})
export class MovieListsModule { }
