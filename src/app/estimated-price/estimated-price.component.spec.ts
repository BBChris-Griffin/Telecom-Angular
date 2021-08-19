import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedPriceComponent } from './estimated-price.component';

describe('EstimatedPriceComponent', () => {
  let component: EstimatedPriceComponent;
  let fixture: ComponentFixture<EstimatedPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatedPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
