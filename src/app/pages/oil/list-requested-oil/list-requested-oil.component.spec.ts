import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestedOilComponent } from './list-requested-oil.component';

describe('ListRequestedOilComponent', () => {
  let component: ListRequestedOilComponent;
  let fixture: ComponentFixture<ListRequestedOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRequestedOilComponent]
    });
    fixture = TestBed.createComponent(ListRequestedOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
