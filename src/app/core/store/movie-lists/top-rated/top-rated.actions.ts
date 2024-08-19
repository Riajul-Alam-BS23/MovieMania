import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';

export const loadTopRatedListsMovies = createAction(
    '[Top Rated Lists] load Top Rated Lists Movies',
    props<{movies:ListsType }>()
);

export const loadTopRatedListsMoviesSuccess = createAction(
    '[Top Rated Lists] load Top Rated Lists Movies Success',
    props<{ movies: Movie[] }>()
);

export const loadTopRatedListsMoviesFailure = createAction(
    '[Top Rated Lists] load Top Rated Lists Movies Failure',
    props<{ error: string }>()
);

