import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { Movie } from '../../../../core/models/api/MovieResponse';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MovieActions from '../../../../core/store/home/trending/trending.actions';
import * as MovieSelectors from '../../../../core/store/home/trending/trending.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css'
})
export class MoviesCarouselComponent {
  @Input() title: string;
  @Input() movies$:Observable<any>;
  constructor(private movieService:MovieService,private store:Store,private router:Router) {
  }
  ngOnInit():void{
  }
  OnClick(){
    this.router.navigate(['/movie-details', 718821]);
  }
}
