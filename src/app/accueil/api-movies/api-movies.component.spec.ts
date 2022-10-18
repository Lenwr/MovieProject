import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIMoviesComponent } from './api-movies.component';

describe('APIMoviesComponent', () => {
  let component: APIMoviesComponent;
  let fixture: ComponentFixture<APIMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
