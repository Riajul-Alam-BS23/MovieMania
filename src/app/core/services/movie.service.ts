import { Injectable } from '@angular/core';
import { PaginationResponse } from '../models/api/PaginationResponse';
import { Movie } from '../models/api/MovieResponse';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MovieDetails } from '../models/api/MovieDetailsResponse';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private token: string=environment.BASE_URL;
  constructor(private http:HttpClient) { }
  getTrendingMovies(period:string): Observable<PaginationResponse<Movie[]>> {
    const apiUrl = `${this.token}/trending/all/${period}`;
    return this.http.get<PaginationResponse<Movie[]>>(apiUrl);
  }
  getPopularMovies(period: string): Observable<PaginationResponse<Movie[]>> {
    // const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    const apiUrl = `${this.token}/${period}/popular?language=en-US&page=1`;
    const data= this.http.get<PaginationResponse<Movie[]>>(apiUrl);
    // console.log(data);
    return data;
  }
  getSingleMovie(movie_id:number): Observable<MovieDetails>{
    const apiUrl = `${environment.BASE_URL}/movie/${movie_id}?language=en-US`
    this.http.get<MovieDetails>(apiUrl).subscribe(
      (data) => {
        console.log("Single movie =>", data);
      },
      (error) => {
        console.error("Error fetching movie data", error);
      }
    );
    return this.http.get<MovieDetails>(apiUrl);

  }

}
