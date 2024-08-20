import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { DataType } from '../../../../core/models/types/DetailsType';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MoviesFacadeService } from '../../services/movies.facade.service';
import { Movie } from '../../../../core/models/api/MovieResponse';
import { PaginationResponse } from '../../../../core/models/api/PaginationResponse';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.css'],
})
export class MovieListsComponent implements OnInit {
  movies$: Observable<any>;
  pageNumber = 1;
  media: string;
  mediaType: string;
  routeChange:boolean = false;
  constructor(
    private movieService: MovieService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private moviesFacadeService: MoviesFacadeService
  ) {}

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   tap(()=>this.pageNumber=1),
    //   switchMap(params=>{
    //     this.media=params.get('media');
    //     this.mediaType=params.get('media_type');
    //     const listsType: DataType = {
    //       media: this.media,
    //       media_type: this.mediaType,
    //       page: this.pageNumber
    //     };
    //     this.moviesFacadeService.getMovies(listsType).subscribe((movies:PaginationResponse<Movie[]>)=>{
    //       if(movies.results.length==0){
    //         this.moviesFacadeService.dispatchData(listsType);
    //         this.moviesFacadeService.getMovies(listsType).subscribe((movies1:PaginationResponse<Movie[]>)=>{
    //           this.movies$=of(movies1.results);
    //         });
    //       }else{
    //         if(movies.results.length>20){
    //           const moviesToDisplay = movies.results.slice(0,20);
    //           this.movies$ = of(moviesToDisplay);
    //         }else{
    //           this.movies$=of(movies.results);
    //         }
    //       }
    //       console.log("Error Ekhane ache ", movies.results);
    //     });
    //     return this.movies$;
    //   })
    // ).subscribe((movies:PaginationResponse<Movie[]>)=>{
    //   this.movies$=of(movies.results);
    // })
    this.route.paramMap.pipe(
      tap(() => this.pageNumber = 1), // Reset page number on route change
      switchMap(params => {
        this.media = params.get('media');
        this.mediaType = params.get('media_type');
        const listsType: DataType = {
          media: this.media,
          media_type: this.mediaType,
          page: this.pageNumber
        };
        
        return this.moviesFacadeService.getMovies(listsType).pipe(
          tap((movies:PaginationResponse<Movie[]>) => {
            if (movies.results.length === 0) {
              this.moviesFacadeService.dispatchData(listsType);
            }
          }),
          switchMap(movies => {
            if (movies.results.length > 20) {
              const moviesToDisplay = movies.results.slice(0, 20);
              return of(moviesToDisplay);
            } else {
              return of(movies.results);
            }
          })
        );
      })
    ).subscribe(movies => {
      this.movies$ = of(movies);
    });
  }
  
  loadMore() {
    this.pageNumber++;
    const listsType: DataType = {
      media: this.route.snapshot.paramMap.get('media'),
      media_type: this.route.snapshot.paramMap.get('media_type'),
      page: this.pageNumber
    };
    this.moviesFacadeService.getMovies(listsType).subscribe((movies:PaginationResponse<Movie[]> )=>{
      if(movies.results.length<this.pageNumber*20){
        this.moviesFacadeService.dispatchData(listsType);
        this.moviesFacadeService.getMovies(listsType).subscribe((movies:PaginationResponse<Movie[]>)=>{
          this.movies$=of(movies.results);
        });
      }else{
        if(movies.results.length>this.pageNumber*20){
          const moviesToDisplay = movies.results.slice(0, this.pageNumber * 20);
          this.movies$ = of(moviesToDisplay);
        }else{
          this.movies$=of(movies.results);
        }
      }
    });
  }
}
