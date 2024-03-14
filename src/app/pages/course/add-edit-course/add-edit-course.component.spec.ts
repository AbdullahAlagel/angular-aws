import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCourseComponent } from './add-edit-course.component';

describe('CourseComponent', () => {
  let component: AddEditCourseComponent;
  let fixture: ComponentFixture<AddEditCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditCourseComponent]
    });
    fixture = TestBed.createComponent(AddEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
