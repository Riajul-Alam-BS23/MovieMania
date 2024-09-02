import { createActionGroup, props } from '@ngrx/store';
import { Genre } from '../../../models/api/GenreResponse';
import { Type } from '../../../models/types/DetailsType';

export const GenresListsMoviesActions = createActionGroup({
  source: 'Genres Lists Movies',
  events: {
    'Load': props<{ genres: Type }>(),
    'Load Success': props<{ genres: Genre[] }>(),
    'Load Failure': props<{ error: string }>(),
  }
});
