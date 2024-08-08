import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css'
})
export class MoviesCarouselComponent {
  @Input() title: string;
  movies=[
    { title: 'Inception', releaseYear: 2010 },
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Star Wars: The Force Awakens', releaseYear: 2015 },
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Star Wars: The Force Awakens', releaseYear: 2015 },
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Star Wars: The Force Awakens', releaseYear: 2015 },
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Star Wars: The Force Awakens', releaseYear: 2015 },
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'The Dark Knight', releaseYear: 2008 },
  ];
}
