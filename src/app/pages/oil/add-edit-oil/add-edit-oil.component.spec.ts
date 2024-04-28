import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOilComponent } from './add-edit-oil.component';

describe('AddEditOilComponent', () => {
  let component: AddEditOilComponent;
  let fixture: ComponentFixture<AddEditOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditOilComponent]
    });
    fixture = TestBed.createComponent(AddEditOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
