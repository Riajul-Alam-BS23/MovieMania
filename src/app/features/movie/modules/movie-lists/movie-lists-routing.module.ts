import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListsComponent } from '../../components/movie-lists/movie-lists.component';
import { RouterModule } from '@angular/router';

const routes=[
  {
    path:':media/:media_type',
    component: MovieListsComponent
    // loadChildren: ()=> import('./movie-lists.module').then((m)=>m.MovieListsModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieListsRoutingModule { }
