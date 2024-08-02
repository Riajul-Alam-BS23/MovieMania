import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  searchQuery: string = '';

  onSearch() {
    // Perform search logic here using the 'searchQuery'
    console.log('Search query:', this.searchQuery);
  }
}