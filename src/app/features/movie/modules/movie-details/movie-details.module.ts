

import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../../../material';
import { MovieComponent } from '../../movie.component';
import { SharedModule } from '../../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MovieEffects, movieReducer } from '../../../../core/store/movie/movie.state';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { MovieActionsComponent } from '../../components/movie-actions/movie-actions.component';
import { CrewListsComponent } from '../../components/crew-lists/crew-lists.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsResolver } from '../../resolvers/movie-details.resolver';
import { GenreListsComponent } from '../../components/genre-lists/genre-lists.component';

const routes: Routes=[
  {
    path: ':id',
    component: MovieDetailsComponent,
    resolve:{
      movie: MovieDetailsResolver
    }
  }
];

@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieActionsComponent,
    CrewListsComponent,
    GenreListsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    EffectsModule.forFeature(MovieEffects),
    StoreModule.forFeature('movie',movieReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    RouterModule.forChild(routes)

  ],
  // exports:[RouterModule]
})
export class MovieDetailsModule { }





