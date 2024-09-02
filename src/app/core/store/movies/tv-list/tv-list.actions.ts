import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { Type } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const TvListsActions = createActionGroup({
    source: 'Tv Lists',
    events: {
        'Load Lists Tvs': props<{ tvs:Type}>(),
        'Load Lists Tvs Success': props<{ Tvs: PaginationResponse<Movie[]> }>(),
        'Load Lists Tvs Failure': props<{ error: string }>(),
    }
});
