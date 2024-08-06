import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './features/movie/movie.component';

const routes: Routes = [
  {
    path:'movie',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
