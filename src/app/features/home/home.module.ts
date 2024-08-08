import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material';
import { FormsModule } from '@angular/forms';
import { MoviesCarouselComponent } from './components/movie-carousel/movie-carousel.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './components/search/search.component';


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
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }





