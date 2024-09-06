import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../../../core/services/movie.service';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-lists-card',
  templateUrl: './movie-lists-card.component.html',
  styleUrl: './movie-lists-card.component.css'
})
export class MovieListsCardComponent {
  @Input() movies$:Observable<any>;
  @Input() type: string='movie'||'tv';


  constructor(private movieService:MovieService,
    private store:Store,
    private router:Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}
  ngOnInit():void{
  }
  OnClick(movieId:number):void{
    this.router.navigate(['details', this.type ,movieId]);
  }


}
