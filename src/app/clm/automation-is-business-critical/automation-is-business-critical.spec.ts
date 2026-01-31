import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationIsBusinessCritical } from './automation-is-business-critical';

describe('AutomationIsBusinessCritical', () => {
  let component: AutomationIsBusinessCritical;
  let fixture: ComponentFixture<AutomationIsBusinessCritical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationIsBusinessCritical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationIsBusinessCritical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
