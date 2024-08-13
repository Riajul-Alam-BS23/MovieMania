import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListsComponent } from './genre-lists.component';

describe('GenreListsComponent', () => {
  let component: GenreListsComponent;
  let fixture: ComponentFixture<GenreListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenreListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
