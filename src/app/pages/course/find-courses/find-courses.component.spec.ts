import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCoursesComponent } from './find-courses.component';

describe('FindCoursesComponent', () => {
  let component: FindCoursesComponent;
  let fixture: ComponentFixture<FindCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindCoursesComponent]
    });
    fixture = TestBed.createComponent(FindCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
