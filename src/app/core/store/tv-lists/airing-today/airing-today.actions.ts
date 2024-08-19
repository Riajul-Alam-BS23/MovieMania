import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { ListsType } from '../../../models/types/DetailsType';

export const loadAiringTodayListsTv = createAction(
    '[Airing Today Lists Tv] Load Airing Today Lists Tv',
    props<{movies:ListsType }>()
);

export const loadAiringTodayListsTvSuccess = createAction(
    '[Airing Today Lists Tv] Load Airing Today Lists Tv Success',
    props<{ movies: Movie[] }>()
);

export const loadAiringTodayListsTvFailure = createAction(
    '[Airing Today Lists Tv] Load Airing Today Lists Tv Failure',
    props<{ error: string }>()
);

