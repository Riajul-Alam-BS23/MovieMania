import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';

export const loadNowPlayingListsMovies = createAction(
    '[Now Playing Lists] Load Now Playing Lists Movies',
    props<{movies:ListsType }>()
);

export const loadNowPlayingListsMoviesSuccess = createAction(
    '[Now PlayingLists] Load Now Playing Lists Movies Success',
    props<{ movies: Movie[] }>()
);

export const loadNowPlayingListsMoviesFailure = createAction(
    '[Now Playing Lists] Load Lists Movies Failure',
    props<{ error: string }>()
);

