import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'',
    loadChildren:()=>import('./features/movie/modules/movie-lists/movie-lists.module').then((m)=>m.MovieListsModule)
  }
  ,
  {
    path:'',
    loadChildren: ()=> import('./features/movie/modules/movie-details/movie-details.module').then((m)=>m.MovieDetailsModule)
  },
  {
    path:'home',
    loadChildren: ()=> import('./features/home/home.module').then((m)=>m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
