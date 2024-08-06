import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movie = {
    title: 'A Quiet Place: Day One',
    year: 2024,
    rating: 70,
    genres: ['Horror', 'Science Fiction', 'Thriller'],
    runtime: '1h 39m',
    releaseDate: '06/28/2024 (US)',
    overview: 'As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive with her cat.',
    cast: [
      { name: 'Michael Sarnoski', role: 'Director, Screenplay, Story' },
      { name: 'John Krasinski', role: 'Story, Writer' },
      { name: 'Scott Beck', role: 'Characters' },
      { name: 'Bryan Woods', role: 'Characters' }
    ],
    posterUrl: 'https://via.placeholder.com/300x450.png', // Replace with actual poster URL
  };
  

  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  playTrailer() {
    // Implement trailer playback logic here
  }
}
