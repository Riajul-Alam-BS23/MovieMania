import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutFacadeService } from '../layout.facade.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  showSearchBar: boolean = false;
  searchQuery: string = '';
  searchResults$;
  showSearchItem=false;
  constructor(
    private router: Router,
    private layoutFacadeService:LayoutFacadeService,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(){
    this.activatedRoute.queryParamMap.subscribe(params=>{
      const query = params.get('query');
      console.log(query)
      this.searchResults$=this.layoutFacadeService.getSearchResults(query);
      this.searchResults$.subscribe(res=>{
        if(res.length>0){
          this.showSearchItem=true;
        }else{
          this.showSearchItem=false;
        }
      })
    })
  }
  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }
  onSearchQueryChange() {
    this.router.navigate([], {
      queryParams: { query: this.searchQuery },
      queryParamsHandling: 'merge'
    });
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery }
      });
    }
  }

}
