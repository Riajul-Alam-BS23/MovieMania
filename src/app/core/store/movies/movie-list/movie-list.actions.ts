import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { Type } from '../../../models/types/DetailsType';
import { PaginationResponse } from '../../../models/api/PaginationResponse';

export const MovieListsActions = createActionGroup({
    source: 'Movie Lists',
    events: {
        'Load Lists Movies': props<{ movies:Type}>(),
        'Load Lists Movies Success': props<{ movies: PaginationResponse<Movie[]> }>(),
        'Load Lists Movies Failure': props<{ error: string }>(),
    }
});
