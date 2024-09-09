import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeFacadeService } from '../../services/home.facade.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  searchQuery: string = '';
  searchResults$;
  type:string;

  constructor(
    private route: ActivatedRoute,
    private homeFacadeService:HomeFacadeService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      if (this.searchQuery) {
        this.fetchSearchResults();
      }
    });
  }

  fetchSearchResults() {
    this.homeFacadeService.getSearchResults(this.searchQuery).subscribe(res=>{
      console.log(res)
      if(res.length>0){
        this.type=res[0].media_type;
      }
      this.searchResults$ = of(res);
    })
  }
}
