import { Component, Input } from '@angular/core';
import { Genre } from '../../../../core/models/api/MovieDetailsResponse';

@Component({
  selector: 'app-genre-lists',
  templateUrl: './genre-lists.component.html',
  styleUrl: './genre-lists.component.css'
})



export class GenreListsComponent {
  @Input() genres: Genre[]= [];
  @ Input() release_date: string;
  @ Input() original_language: string;
  @ Input() runtime:number;
  runtimeHours:number;
  runtimeMin:number;
  ngOnInit() : void{
    this.runtimeHours = Math.floor(this.runtime / 60);
    this.runtimeMin = this.runtime % 60;
  }

}



