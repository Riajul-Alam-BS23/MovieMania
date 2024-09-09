import { Injectable } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutFacadeService {

  constructor(
    private movieService:MovieService
  ) { }
  getSearchResults(searchTerm:string){
    return this.movieService.getSearchData(searchTerm).pipe(
      map(res=>{
        return res.results.map(movie=>{
          return movie.title;
        })
      })
    )
  }
}
