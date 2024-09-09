import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MaterialModule } from '../material';
import { CommonModule } from '@angular/common';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { CustomDropdownMenuComponent } from './components/custom-dropdown-menu/custom-dropdown-menu.component';
import { MoviePopoverComponent } from './components/movie-popover/movie-popover.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { PopoverDirective } from './directives/popover.directive';
import { MovieListsCardComponent } from './components/movie-lists-card/movie-lists-card.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieRatingComponent,
    CustomDropdownMenuComponent,
    MoviePopoverComponent,
    SafeUrlPipe,
    PopoverDirective,
    MovieListsCardComponent
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
    CustomDropdownMenuComponent,
    MoviePopoverComponent,
    SafeUrlPipe,
    PopoverDirective,
    MovieListsCardComponent
  ]
})
export class SharedModule { }
