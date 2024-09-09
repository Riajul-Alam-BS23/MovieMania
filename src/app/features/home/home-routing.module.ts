import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'search',
    component: SearchResultsComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  ,exports:[RouterModule]
})
export class HomeRoutingModule { }
