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
        this.movieListsService.createQueryParams(params);
        const queryParams = this.movieListsService.getQueryParams();
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

  tooltipVideoUrl: string | undefined='https://www.youtube.com/embed/MuHpsz7Q3P0?si=IwqBUDbUdZp8ik1Q';




}
