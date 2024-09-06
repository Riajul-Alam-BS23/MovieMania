import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePopoverComponent } from './movie-popover.component';

describe('MoviePopoverComponent', () => {
  let component: MoviePopoverComponent;
  let fixture: ComponentFixture<MoviePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
