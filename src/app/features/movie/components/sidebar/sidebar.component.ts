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
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Location } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  genres$: Observable<Genre[]>;
  panelOpenState = false;
  // query params
  selectedSort: string = 'popularity.desc';
  showMeSelectedOption = "everything";
  selectedReleaseDateFrom: Date;
  selectedReleaseDateTo: Date = new Date('2025-02-28');
  firstUserScoreValue: number = 0;
  lastUserScoreValue: number = 10;
  userVoteValue: number = 0;
  firstRuntimeValue: number = 0;
  lastRuntimeValue: number = 420;
  keywords: string = '';
  language: string = "en-US";
  selectedGenres: string[] = [];
  pageNumber: number = 1;

  media: string = '';
  mediaSubType: string;
  filtersIcon = "expand_more";
  sortIcon = "chevron_right";
  isPanelExpanded = true;

  showSearchButton:boolean = false;;

  constructor(
    private movieService: MovieService,
    private store: Store,
    private route: ActivatedRoute,
    private movieListsFacadeService: MovieListsFacadeService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private location: Location
  ) { }
  
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 900px)']).subscribe((state: BreakpointState) => {
      this.isPanelExpanded = !state.matches;
      this.filtersIcon = "chevron_right";
    });


    this.route.paramMap.subscribe((params => {
      this.resetFilters(params);
      this.selectedGenres=[];
      this.media = params.get('media');
      this.mediaSubType = params.get('media_type');
      const genresRequest: Type = {
        media: this.media
      }
      this.movieListsFacadeService.dispatchGenres(genresRequest);
      this.genres$ = this.movieListsFacadeService.getGenresList(genresRequest);
    }));

    this.route.queryParamMap.subscribe((params) => {
      this.resetFilters(params);
    })

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

  onSortChange(event: MatSelectChange) {
    console.log("Change Event : ", event.value);
    this.selectedSort = event.value;
    // this.showSearchButton.emit(true);
  }

  toggleSortPanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  onFilterOpen() {
    this.filtersIcon = this.filtersIcon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }

  onSortOpen() {
    this.sortIcon = this.sortIcon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }


  toggleGenreSelection(genre: string): void {
    if (this.selectedGenres.includes(genre)) {
      this.selectedGenres = this.selectedGenres.filter(g => g !== genre);
    } else {
      this.selectedGenres.push(genre);
      console.log("Genres ", this.selectedGenres);
    }
  }

  isSelected(genre: string): boolean {
    return this.selectedGenres.includes(genre);
  }

  updateQueryUrl() {
    const queryParams = [
      `sort_by=${this.selectedSort}`,
      `page=${this.pageNumber}`,
      `language=en-US`,
      this.selectedGenres.length > 0 ? `with_genres=${this.selectedGenres.join(' ')}` : '',
      this.selectedReleaseDateFrom ? `primary_release_date.gte=${this.selectedReleaseDateFrom}` : '',
      this.selectedReleaseDateTo ? `primary_release_date.lte=${this.selectedReleaseDateTo.toISOString().split('T')[0]}` : '',
      this.keywords ? `with_keywords=${this.keywords}` : '',
      this.firstUserScoreValue > 0 ? `vote_average.gte=${this.firstUserScoreValue}` : '',
      this.lastUserScoreValue > 0 ? `vote_average.lte=${this.lastUserScoreValue}` : '',
      this.userVoteValue > 0 ? `vote_count.lte=${this.userVoteValue}` : '',
      this.firstRuntimeValue > 0 ? `with_runtime.gte=${this.firstRuntimeValue}` : '',
      this.lastRuntimeValue > 0 ? `with_runtime.lte=${this.lastRuntimeValue}` : ''
    ];

    const queryString = queryParams.filter(param => param).join('&');
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.convertQueryStringToObject(queryString),
      queryParamsHandling: 'merge'
    });

    //try different way
    // this.location.replaceState(this.router.url.split('?')[0], new URLSearchParams(this.convertQueryStringToObject(queryString)).toString());

  }

  convertQueryStringToObject(queryString: string): any {
    return queryString.split('&').reduce((acc, param) => {
      const [key, value] = param.split('=');
      acc[key] = value;
      return acc;
    }, {});
  }

  resetFilters(params: any): void {
    if (params.get('sort_by')) this.selectedSort = params.get('sort_by');
    if (params.get('with_genres')) this.selectedGenres = decodeURIComponent(params.get('with_genres')).split(' ');
    if (params.get('primary_release_date.gte')) this.selectedReleaseDateFrom = new Date(params.get('primary_release_date.gte'));
    if (params.get('primary_release_date.lte')) this.selectedReleaseDateTo = new Date(params.get('primary_release_date.lte'));
    if (params.get('with_keywords')) this.keywords = params.get('with_keywords');
    if (params.get('vote_average.gte')) this.firstUserScoreValue = params.get('vote_average.gte');
    if (params.get('vote_average.lte')) this.lastUserScoreValue = params.get('vote_average.lte');
    if (params.get('vote_count.lte')) this.userVoteValue = params.get('vote_count.lte');
    if (params.get('with_runtime.gte')) this.firstRuntimeValue = params.get('with_runtime.gte');
    if (params.get('with_runtime.lte')) this.lastRuntimeValue = params.get('with_runtime.lte');
    if (params.get('language')) this.language = params.get('language');
  }

}
