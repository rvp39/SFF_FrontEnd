import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropBidsComponent } from './crop-bids.component';

describe('CropBidsComponent', () => {
  let component: CropBidsComponent;
  let fixture: ComponentFixture<CropBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropBidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
