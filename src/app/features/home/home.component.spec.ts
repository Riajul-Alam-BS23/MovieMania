import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SearchComponent } from './components/search/search.component';
import { MoviesCarouselComponent } from './components/movie-carousel/movie-carousel.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SearchComponent,
        MoviesCarouselComponent
      ],
      // imports:[
      //   HttpClient
      // ],
      providers:[
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get']) }  // mock HttpClient for testing purposes
        ,
        provideMockStore({ }),
 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
