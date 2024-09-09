import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../../../../core/models/types/DetailsType';
import { Observable, of } from 'rxjs';
import { MovieListsService } from '../../services/movie-lists.service';
import { MovieListsFacadeService } from '../../services/movie-lists.facade.service';
import { MoviePopoverComponent } from '../../../../shared/components/movie-popover/movie-popover.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.css'],
})
export class MovieListsComponent implements OnInit {
  tooltipVideoUrl: string | undefined='https://www.youtube.com/embed/MuHpsz7Q3P0?si=IwqBUDbUdZp8ik1Q';
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
      this.media=params.get('media');
      const requestType:Type={
        media: this.media,
        page: this.pageNumber || 1
      }
      this.movieListsFacadeService.getLists(this.media).subscribe(
        (movies)=>{
          if(movies.results.length>0){
            this.movies$=of(movies.results.slice(0,20));
          }else{
            this.movieListsFacadeService.dispatchLists(requestType);
            this.movies$=this.movieListsFacadeService.getLists(this.media);
            this.movies$.subscribe(movies=>{
              const moviesToDisplay = movies.results.slice(0,20);
              this.movies$=of(moviesToDisplay);
            });
          }
        }
      );

    })
    

    //for queryParams change in route
    this.route.queryParamMap.subscribe((params) => {
      console.log("its called after reload")
      const currentPage=params.get('page');
        console.log("2 --->warning")
        console.log("queryParamMap call from ngOnInit",params)
        const queryParams=this.createQueryParams(params);
        this.pageNumber=parseInt(params.get('page'));
        const requestType:Type={
          media: this.media,
          page: this.pageNumber || 1,
          queryParams: queryParams
        }
        this.movieListsFacadeService.dispatchLists(requestType);
        this.movies$=this.movieListsFacadeService.getLists(this.media);
        this.movies$.subscribe(movies=>{
          const moviesToDisplay = movies.results.slice(0,20);
          this.movies$=of(moviesToDisplay);
        });
    });
  }

  loadMore() {
    this.pageNumber++;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.pageNumber|| 2},
      queryParamsHandling: 'merge',
    });
    this.route.queryParamMap.subscribe((params) => {
      this.pageNumber=parseInt(params.get('page'));

      const queryParams=this.createQueryParams(params);
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

  createQueryParams(queryParams: any){
    let query=``;
    query+=`include_adult=${queryParams.get('include_adult')|| 'false'}`;
    query+=`&language=en-US`;
    query+=`&page=${queryParams.get('page')|| '1'}`;
    query+=(queryParams.get('sort_by')?`&sort_by=${queryParams.get('queryParams.get')}`:'&sort_by=popularity.desc');
    if(queryParams.get('primary_release_date.gte'))query+=`&primary_release_date.gte=${queryParams.get('primary_release_date.gte')}`;
    if(queryParams.get('primary_release_date.lte')) query+=`&primary_release_date.lte=${queryParams.get('primary_release_date.lte')}`;
    if(queryParams.get('with_genres')){
      query+=`&with_genres=${queryParams.get('with_genres')}`;
    }
    if(queryParams.get('with_runtime.gte')) query+=`&with_runtime.gte=${queryParams.get('with_runtime.gte')}`;
    if(queryParams.get('with_runtime.lte')) query+=`&with_runtime.lte=${queryParams.get('with_runtime.lte')}`;
    if(queryParams.get('with_keywords')) query+=`&with_keywords=${queryParams.get('with_keywords')}`;
    if(queryParams.get('vote_average.gte')) query+=`&vote_average.gte=${queryParams.get('vote_average.gte')}`;
    if(queryParams.get('vote_average.lte')) query+=`&vote_average.lte=${queryParams.get('vote_average.lte')}`;
    if(queryParams.get('vote_count.lte')) query+=`&vote_count.lte=${queryParams.get('vote_count.lte')}`;
    return query;
  }




}
