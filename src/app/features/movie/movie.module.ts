import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieActionsComponent } from './components/movie-actions/movie-actions.component';
import { CrewListsComponent } from './components/crew-lists/crew-lists.component';
import { SharedModule } from '../../shared/shared.module';
import { MovieDetailsModule } from './modules/movie-details/movie-details.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { GenreListsComponent } from './components/genre-lists/genre-lists.component';
import { MovieListsComponent } from './components/movie-lists/movie-lists.component';
import { MovieListsCardComponent } from '../../shared/components/movie-lists-card/movie-lists-card.component';
import { MoviePopoverComponent } from '../../shared/components/movie-popover/movie-popover.component';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovieRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class MovieModule { }





