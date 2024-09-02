import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCarouselComponent } from './movie-carousel.component';


describe('MoviesCarouselComponent', () => {
  let component: MoviesCarouselComponent;
  let fixture: ComponentFixture<MoviesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
