import { Component, Input } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { DataType } from '../../../../core/models/types/DetailsType';
import { Observable } from 'rxjs';
import { loadListsMovies } from '../../../../core/store/movies/movie-lists/movie-lists.actions';
import { selectMoviesLists } from '../../../../core/store/movies/movie-lists/movie-lists.selectors';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrl: './movie-lists.component.css',
})
export class MovieListsComponent {
  movies$: Observable<any>;
  pageNumber = 0;
  media: string;
  mediaType: string;
  constructor(
    private movieService: MovieService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.loadMore();
  }
  loadMore() {
    this.pageNumber++;
    this.media = this.route.snapshot.paramMap.get('media');
    this.mediaType = this.route.snapshot.paramMap.get('media_type');
    const listsType: DataType = {
      media_type: this.media,
      media_type_type: this.mediaType,
      page: this.pageNumber
    };
    console.log(listsType);
    this.store.dispatch(loadListsMovies({movies: listsType}));
    this.movies$ = this.store.select(selectMoviesLists);
  }
}
