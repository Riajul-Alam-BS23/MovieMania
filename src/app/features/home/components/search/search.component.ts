import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() backgroundImage='https://media.themoviedb.org/t/p/w440_and_h660_face/sgv6nwj1TlDDKqxbcUEuds8fqoz.jpg';
  searchQuery: string = '';

  constructor(private router: Router) {}

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
