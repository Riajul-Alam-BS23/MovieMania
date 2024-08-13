import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.css'
})
export class MovieRatingComponent {
  @Input() ratingNumber: number=63;
  @Input() ratingSize: number;
  ngOnInit() {
    this.ratingNumber = Math.round(this.ratingNumber);
  }
}
