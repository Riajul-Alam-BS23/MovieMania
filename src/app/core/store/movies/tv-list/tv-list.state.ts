import { createFeature, createReducer, on } from '@ngrx/store';
import { Movie } from '../../../models/api/MovieResponse';
import { PaginationResponse } from '../../../models/api/PaginationResponse';
import { TvListsActions } from './tv-list.actions';

export interface TvListsState {
    Tvs: PaginationResponse<Movie[]>;
    error: string | null;
    loading: boolean;
}

export const initialState: TvListsState = {
    Tvs: { page: 0, results: [], total_pages: 0, total_results: 0 },
    error: null,
    loading: false,
};
export const Tv_LISTS_STATE_NAME = 'tvLists';
export const tvListsFeature = createFeature({
    name: Tv_LISTS_STATE_NAME,
    reducer: createReducer(
        initialState,
        on(TvListsActions.loadListsTvs, state => ({
            ...state,
            loading: true,
        })),
        on(TvListsActions.loadListsTvsSuccess, (state, { Tvs }) => ({
            ...state,
            Tvs: {
                ...state.Tvs,
                page: Tvs.page,
                results:(Tvs.page>=2? [...Tvs.results,...state.Tvs.results]: Tvs.results),
                total_pages: Tvs.total_pages,
                total_results: Tvs.total_results,
            },
            loading: false,
        })),
        on(TvListsActions.loadListsTvsFailure, (state, { error }) => ({
            ...state,
            error,
            loading: false,
        }))
    )
});

export const {
    selectTvs,
    selectError,
    selectLoading,
} = tvListsFeature;
