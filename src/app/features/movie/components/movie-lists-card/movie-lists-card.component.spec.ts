import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListsCardComponent } from './movie-lists-card.component';

describe('MovieListsCardComponent', () => {
  let component: MovieListsCardComponent;
  let fixture: ComponentFixture<MovieListsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
