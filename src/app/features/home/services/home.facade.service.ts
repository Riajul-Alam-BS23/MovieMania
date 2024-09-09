import { Injectable } from '@angular/core';
import { MovieService } from '../../../core/services/movie.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {
  searchResults;
  constructor(
    private movieService:MovieService
  ) { }
  getSearchResults(searchQuery:string){
    return this.movieService.getSearchData(searchQuery).pipe(
      map(res=>{
        return res.results.filter(data=>{
          if(data.media_type){
            if(data.media_type=='movie' || data.media_type== 'tv') {
              return true
            }
          }
          return false;
        })
      })
    );
  }
}
