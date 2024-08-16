


export interface PaginationResponse<T> {
    page: number;
    results: T;
    total_pages: number;
    total_results: number;
}



export interface PopularMovieState<Movie> {
    movies: Movie[];
    currentPage: number;
    totalPages: number;
    totalResults: number;
    error: string | null;
    loading: boolean;
}






