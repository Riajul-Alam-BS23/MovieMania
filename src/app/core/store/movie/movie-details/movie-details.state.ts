

export interface MovieDetailsState {
    movie: any | null; // Define the appropriate type instead of `any` if you have a movie model.
    loading: boolean;
    error: string | null;
}

export const initialMovieDetailsState: MovieDetailsState = {
    movie: null,
    loading: false,
    error: null,
};
