import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialModule } from '../material';
import { CommonModule } from '@angular/common';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';
import { CustomDropdownMenuComponent } from './custom-dropdown-menu/custom-dropdown-menu.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieRatingComponent,
    CustomDropdownMenuComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    MovieCardComponent,
    MovieRatingComponent,
    CustomDropdownMenuComponent

  ]
})
export class SharedModule { }
