import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MovieService } from '../../../../core/services/movie.service';
import { Store } from '@ngrx/store';
import { Genre } from '../../../../core/models/api/MovieDetailsResponse';
import { Observable, switchMap } from 'rxjs';
import { GenresListsMoviesActions } from '../../../../core/store/filters/genres/genres.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { DataType, Type } from '../../../../core/models/types/DetailsType';
import { MovieListsFacadeService } from '../../services/movie-lists.facade.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  genres$: Observable<Genre[]>;
  panelOpenState = false;
  selectedSort: string = 'popularity.desc';
  showMeSelectedOption="everything";
  selectedReleaseDateFrom:string;
  selectedReleaseDateTo: Date = new Date('2025-02-28');
  
  firstUserScoreValue: number = 0;
  lastUserScoreValue: number = 10;
  userVoteValue: number = 0;
  firstRuntimeValue: number = 0;
  lastRuntimeValue: number = 420;
  keywords: string = '';
  media:string = '';
  mediaSubType:string;
  pageNumber:number = 1;
  @Output() showSearchButton=new EventEmitter<boolean>(false);

  constructor(
    private movieService:MovieService,
    private store:Store,
    private route: ActivatedRoute,
    private movieListsFacadeService:MovieListsFacadeService,
    private router: Router
  ){}
  ngOnInit(){
    this.route.paramMap.subscribe((params=>{
      this.media=params.get('media');
      this.mediaSubType=params.get('media_type');
      this.resetFilters();
      const genresRequest:Type={
        media:this.media
      }
      this.movieListsFacadeService.dispatchGenres(genresRequest);
      this.genres$ = this.movieListsFacadeService.getGenresList(genresRequest);
    }))
  }
  sortOptions: { display: string, value: string }[] = [
    { display: 'Popularity Descending', value: 'popularity.desc' },
    { display: 'Popularity Ascending', value: 'popularity.asc' },
    { display: 'Rating Descending', value: 'rating.desc' },
    { display: 'Rating Ascending', value: 'rating.asc' },
    { display: 'Release Date Descending', value: 'release_date.desc' },
    { display: 'Release Date Ascending', value: 'release_date.asc' },
    { display: 'Title (A-Z)', value: 'title.asc' }
  ];
  selectedGenres: string[] = [];

  onSortChange(event: MatSelectChange) {
    console.log("Change Event : ", event.value);
    this.selectedSort = event.value;
    this.showSearchButton.emit(true);
    // this.updateQueryUrl();
  }
  toggleSortPanel(){
    this.panelOpenState =!this.panelOpenState;
  }
  filtersIcon="expand_more";
  onFilterOpen(){
    this.filtersIcon = this.filtersIcon === 'chevron_right'? 'expand_more' : 'chevron_right';
  }
  sortIcon="chevron_right";
  onSortOpen(){
    this.sortIcon = this.sortIcon === 'chevron_right'? 'expand_more' : 'chevron_right';
  }


  toggleGenreSelection(genre: string): void {
    if (this.selectedGenres.includes(genre)) {
      this.selectedGenres = this.selectedGenres.filter(g => g !== genre.toLowerCase());
    } else {
      this.selectedGenres.push(genre.toLowerCase());
      console.log("Genres ", this.selectedGenres);
    }
  }

  // Check if the genre is selected
  isSelected(genre: string): boolean {
    return this.selectedGenres.includes(genre.toLowerCase());
  }
  updateQueryUrl() {
    const queryParams = [
      `sort_by=${this.selectedSort}`,
      `page=${this.pageNumber}`,
      `language=en-US`,
      this.selectedGenres.length > 0 ? `with_genres=${this.selectedGenres.join(',')}` : '',
      this.selectedReleaseDateFrom ? `primary_release_date.gte=${this.selectedReleaseDateFrom}` : '',
      this.selectedReleaseDateTo ? `primary_release_date.lte=${this.selectedReleaseDateTo.toISOString().split('T')[0]}` : '',
      this.keywords ? `with_keywords=${this.keywords}` : '',
      this.firstUserScoreValue > 0 ? `vote_average.gte=${this.firstUserScoreValue}` : '',
      this.lastUserScoreValue > 0 ? `vote_average.lte=${this.lastUserScoreValue}` : '',
      this.userVoteValue > 0 ? `vote_count.lte=${this.userVoteValue}` : '',
      this.firstRuntimeValue > 0 ? `with_runtime.gte=${this.firstRuntimeValue}` : '',
      this.lastRuntimeValue > 0? `with_runtime.lte=${this.lastRuntimeValue}` : ''
    ];

    const queryString = queryParams.filter(param => param).join('&');
    console.log("Query String: ", queryString);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.convertQueryStringToObject(queryString),
      queryParamsHandling: 'merge' 
    });
  }

convertQueryStringToObject(queryString: string): any {
  return queryString.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=');
    acc[key] = value;
    return acc;
  }, {});
}

resetFilters():void{
  this.selectedSort = 'popularity.desc';
  this.selectedGenres = [];
  this.selectedReleaseDateFrom = null;
  this.selectedReleaseDateTo = new Date('2025-02-28');
  this.keywords = '';
  this.firstUserScoreValue = 0;
  this.lastUserScoreValue = 10;
  this.userVoteValue = 0;
  this.firstRuntimeValue = 0;
  this.lastRuntimeValue = 420;
}


}
