import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIsSecure } from './business-is-secure';

describe('BusinessIsSecure', () => {
  let component: BusinessIsSecure;
  let fixture: ComponentFixture<BusinessIsSecure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessIsSecure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessIsSecure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
