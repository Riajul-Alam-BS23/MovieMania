import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../../../core/services/movie.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrl: './carousel-items.component.css'
})
export class CarouselItemsComponent {
  @Input() movies$:Observable<any>;
  @Input() type: string='movie'||'tv';
  constructor(private movieService:MovieService,private store:Store,private router:Router) {
  }
  OnClick(movieId:number,type:string){
    this.router.navigate(['', type || this.type,movieId]);
  }
}
