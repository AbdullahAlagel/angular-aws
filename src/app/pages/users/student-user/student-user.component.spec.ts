import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUserComponent } from './student-user.component';

describe('StudentUserComponent', () => {
  let component: StudentUserComponent;
  let fixture: ComponentFixture<StudentUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentUserComponent]
    });
    fixture = TestBed.createComponent(StudentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
