import { Injectable } from '@angular/core';
import { PaginationResponse } from '../models/api/PaginationResponse';
import { Movie } from '../models/api/MovieResponse';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Genre, MovieDetails } from '../models/api/MovieDetailsResponse';
import { DataType, DetailsType, Type } from '../models/types/DetailsType';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string=environment.BASE_URL;
  constructor(private http:HttpClient) { }
  getTrendingMovies(period:string): Observable<PaginationResponse<Movie[]>> {
    const apiUrl = `${this.baseUrl}/trending/all/${period}?language=en-US&page=1`;
    return this.http.get<PaginationResponse<Movie[]>>(apiUrl);
  }
  getPopularMovies(period: string): Observable<PaginationResponse<Movie[]>> {
    const apiUrl = `${this.baseUrl}/${period}/popular?language=en-US&page=1`;
    const data= this.http.get<PaginationResponse<Movie[]>>(apiUrl);
    return data;
  }

  getSingleMovie(type:DetailsType): Observable<MovieDetails>{
    const apiUrl = `${environment.BASE_URL}/${type.media_type}/${type.id}?language=en-US`
    return this.http.get<MovieDetails>(apiUrl);

  }
  getRecommendationsMovies(movies:any){
    const apiUrl = `${environment.BASE_URL}/${movies.media_type}/${movies.id}/recommendations?language=en-US&page=1`;
    return this.http.get<PaginationResponse<Movie[]>>(apiUrl);
  }

  getMovieLists(media_type,media_type_type,page): Observable<any> {
    const apiUrl = `${this.baseUrl}/${media_type}/${media_type_type}?language=en-US&page=${page}`;
    console.log("i am on testing list")
    return this.http.get<any>(apiUrl);
  }

  getListsMovies(listsType:DataType): Observable<PaginationResponse<Movie[]>> {
    const apiUrl = `${this.baseUrl}/${listsType.media}/${listsType.media_type}?language=en-US&page=${listsType.page}`;
    return this.http.get<PaginationResponse<Movie[]>>(apiUrl);
  }
  getGenres(type:Type){
    const apiUrl = `${environment.BASE_URL}/genre/${type.media}/list?language=en-US&page=1`;
    return this.http.get<any>(apiUrl);
  }
  getFiltersData(type:Type){
    const updatedType = {...type, queryParams: type.queryParams || `language=en-US&page=1`};    
    const apiUrl = `${this.baseUrl}/discover/${type.media}?${updatedType.queryParams}`;
    return this.http.get<any>(apiUrl);


    // return this.http.get<any>(apiUrl).pipe(
      //   tap(res=>{
      //     console.log("Value in Service: " , res);
      //   })
    //   catchError(error => {
    //     console.error('Error fetching data:', error);
    //     return throwError(error);
    //   })
    // );
  }

}

