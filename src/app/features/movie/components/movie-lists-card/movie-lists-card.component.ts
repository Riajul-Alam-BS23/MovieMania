import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../../../core/services/movie.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-lists-card',
  templateUrl: './movie-lists-card.component.html',
  styleUrl: './movie-lists-card.component.css'
})
export class MovieListsCardComponent {
  @Input() movies$:Observable<any>;
  @Input() type: string='movie'||'tv';
  constructor(private movieService:MovieService,private store:Store,private router:Router) {
  }
  ngOnInit():void{
    console.log("yes test ==>",this.movies$);
  }
  OnClick(movieId:number,type:string){
    this.router.navigate(['details', type || this.type,movieId]);
  }
}
