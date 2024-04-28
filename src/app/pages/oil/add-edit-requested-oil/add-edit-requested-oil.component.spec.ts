import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRequestedOilComponent } from './add-edit-requested-oil.component';

describe('AddEditRequestedOilComponent', () => {
  let component: AddEditRequestedOilComponent;
  let fixture: ComponentFixture<AddEditRequestedOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditRequestedOilComponent]
    });
    fixture = TestBed.createComponent(AddEditRequestedOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
