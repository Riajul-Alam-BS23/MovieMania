import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewListsComponent } from './crew-lists.component';

describe('CrewListsComponent', () => {
  let component: CrewListsComponent;
  let fixture: ComponentFixture<CrewListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
