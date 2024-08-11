import { Injectable } from '@angular/core';
import { PaginationResponse } from '../models/api/PaginationResponse';
import { Movie } from '../models/api/MovieResponse';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http:HttpClient) { }
  getTrendingMovies(period:string): Observable<PaginationResponse<Movie[]>> {
    const apiUrl = `https://api.themoviedb.org/3/trending/all/${period}`;
    return this.http.get<PaginationResponse<Movie[]>>(apiUrl);
  }
  getPopularMovies(period: string): Observable<PaginationResponse<Movie[]>> {
    // const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    const apiUrl = `https://api.themoviedb.org/3/${period}/popular?language=en-US&page=1`;
    const data= this.http.get<PaginationResponse<Movie[]>>(apiUrl);
    console.log(data);
    return data;
  }

}
