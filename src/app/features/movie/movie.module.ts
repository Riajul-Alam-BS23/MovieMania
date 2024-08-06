import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieActionsComponent } from './movie-actions/movie-actions.component';
import { CrewListsComponent } from './crew-lists/crew-lists.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    MovieComponent,
    MovieActionsComponent,
    CrewListsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovieRoutingModule,
    SharedModule
  ],
  exports: [
    MovieComponent
  ]
})
export class MovieModule { }





