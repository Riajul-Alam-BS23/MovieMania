import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieMania';
  movies = [
    { title: 'Inception', releaseYear: 2010 },
    // { title: 'The Matrix', releaseYear: 1999 },
    // { title: 'The Dark Knight', releaseYear: 2008 },
    // { title: 'Star Wars: The Force Awakens', releaseYear: 2015 }
  ];
}
