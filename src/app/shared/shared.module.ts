import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialModule } from '../material';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class SharedModule { }
