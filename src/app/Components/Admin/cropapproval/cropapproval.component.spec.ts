import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropapprovalComponent } from './cropapproval.component';

describe('CropapprovalComponent', () => {
  let component: CropapprovalComponent;
  let fixture: ComponentFixture<CropapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropapprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
