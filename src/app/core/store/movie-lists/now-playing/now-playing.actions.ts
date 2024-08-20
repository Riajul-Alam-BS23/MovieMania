import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const loadNowPlayingListsMovies = createAction(
    '[Now Playing Lists] Load Now Playing Lists Movies',
    props<{movies:ListsType }>()
);

export const loadNowPlayingListsMoviesSuccess = createAction(
    '[Now Playing Lists] Load Now Playing Lists Movies Success',
    props<{ movies: PaginationResponse<Movie[]> }>()
);

export const loadNowPlayingListsMoviesFailure = createAction(
    '[Now Playing Lists] Load Now Playing Lists Failure',
    props<{ error: string }>()
);

