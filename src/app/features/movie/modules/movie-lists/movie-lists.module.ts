import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListsRoutingModule } from './movie-lists-routing.module';
import { MaterialModule } from '../../../../material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MoviesEffects, moviesReducer } from '../../../../core/store/movies/movies.state';
import { MovieListsComponent } from '../../components/movie-lists/movie-lists.component';
import { MovieListsCardComponent } from '../../components/movie-lists-card/movie-lists-card.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    MovieListsComponent,
    MovieListsCardComponent
  ],
  imports: [
    CommonModule,
    MovieListsRoutingModule,
    MaterialModule,
    SharedModule,
    EffectsModule.forFeature(MoviesEffects),
    StoreModule.forFeature('movies',moviesReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ]
})
export class MovieListsModule { }
