import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAppointmentComponent } from './add-edit-appointment.component';

describe('AddEditAppointmentComponent', () => {
  let component: AddEditAppointmentComponent;
  let fixture: ComponentFixture<AddEditAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAppointmentComponent]
    });
    fixture = TestBed.createComponent(AddEditAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
