import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() backgroundImage='https://media.themoviedb.org/t/p/w440_and_h660_face/sgv6nwj1TlDDKqxbcUEuds8fqoz.jpg';
}
