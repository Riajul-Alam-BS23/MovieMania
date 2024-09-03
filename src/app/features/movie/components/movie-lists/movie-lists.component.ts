import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { DataType, Type } from '../../../../core/models/types/DetailsType';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MoviesFacadeService } from '../../services/movies.facade.service';
import { Movie } from '../../../../core/models/api/MovieResponse';
import { PaginationResponse } from '../../../../core/models/api/PaginationResponse';
import { MovieListsService } from '../../services/movie-lists.service';
import { MovieListsFacadeService } from '../../services/movie-lists.facade.service';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.css'],
})
export class MovieListsComponent implements OnInit {
  movies$: Observable<any>;
  pageNumber = 1;
  media: string;
  mediaSubType: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieListsService:MovieListsService,
    private movieListsFacadeService:MovieListsFacadeService
  ) {}

  ngOnInit() {

    //for initial route change
    this.route.paramMap.subscribe(params=>{
      console.log("1")
      console.log("initial param map call")
      this.pageNumber=1;
      this.media=params.get('media');
      const requestType:Type={
        media: this.media,
        page: this.pageNumber
      }
      this.movieListsFacadeService.getLists(this.media).subscribe(
        (movies)=>{
          if(movies.results.length>0){
            this.movies$=of(movies.results.slice(0,20));
          }else{
            this.movieListsFacadeService.dispatchLists(requestType);
            this.movies$=this.movieListsFacadeService.getLists(this.media);
          }
        }
      );
      console.log("Movies Observable ",this.movies$);
      this.movies$.subscribe(movies=>{
        console.log("movie list movies in queryParamMap", movies);
        const moviesToDisplay = movies.results.slice(0,20);
        this.movies$=of(moviesToDisplay);
      });
    })
    

    //for queryParams change in route
    this.route.queryParamMap.subscribe((params) => {
      const currentPage=params.get('page');
      if(parseInt(currentPage)==1){
        console.log("2 --->warning")
        console.log("queryParamMap call from ngOnInit",params)
        this.pageNumber=1;
        this.movieListsService.createQueryParams(params);
        const queryParams = this.movieListsService.getQueryParams();
        const requestType:Type={
          media: this.media,
          page: this.pageNumber,
          queryParams: queryParams
        }
        this.movieListsFacadeService.dispatchLists(requestType);
        this.movies$=this.movieListsFacadeService.getLists(this.media);
        this.movies$.subscribe(movies=>{
          const moviesToDisplay = movies.results.slice(0,20);
          this.movies$=of(moviesToDisplay);
        });
      }
    });
  }

  loadMore() {
    this.pageNumber++;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.pageNumber },
      queryParamsHandling: 'merge',
    });
    this.route.queryParamMap.subscribe((params) => {
      console.log("4")

      this.movieListsService.createQueryParams(params);
      const queryParams = this.movieListsService.getQueryParams(); 
      const requestType:Type={
        media: this.media,
        page: this.pageNumber,
        queryParams: queryParams
      }
      this.movieListsFacadeService.getLists(this.media).subscribe(movies=>{
        if(movies.results.length>=this.pageNumber*20){
          this.movies$=of(movies.results.slice(0,this.pageNumber*20));
        }else{
          this.movieListsFacadeService.dispatchLists(requestType);
          this.movies$=this.movieListsFacadeService.getLists(this.media);
          this.movies$.subscribe(movies=>{
            console.log("movie list movies ", movies.results)
            const moviesToDisplay = movies.results.slice(0,this.pageNumber*20);
            this.movies$=of(moviesToDisplay);
          })
        }
      })
    });
  }

  showSearchButton=false;
  onSortChange(showSearchButton: boolean){
    this.showSearchButton=showSearchButton;
  }
}
