import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOilComponent } from './search-oil.component';

describe('SearchOilComponent', () => {
  let component: SearchOilComponent;
  let fixture: ComponentFixture<SearchOilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchOilComponent]
    });
    fixture = TestBed.createComponent(SearchOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
