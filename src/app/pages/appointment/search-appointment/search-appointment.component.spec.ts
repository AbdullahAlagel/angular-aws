import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAppointmentComponent } from './search-appointment.component';

describe('SearchAppointmentComponent', () => {
  let component: SearchAppointmentComponent;
  let fixture: ComponentFixture<SearchAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAppointmentComponent]
    });
    fixture = TestBed.createComponent(SearchAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
