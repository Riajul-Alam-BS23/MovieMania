import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieActionsComponent } from './movie-actions.component';

describe('MovieActionsComponent', () => {
  let component: MovieActionsComponent;
  let fixture: ComponentFixture<MovieActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
