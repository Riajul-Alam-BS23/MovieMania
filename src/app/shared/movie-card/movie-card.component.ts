import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  title = 'NOVA';
  date = 'Mar 03, 1974';
  rating = 68;
  imageUrl = "https://media.themoviedb.org/t/p/w440_and_h660_face/sgv6nwj1TlDDKqxbcUEuds8fqoz.jpg";
}