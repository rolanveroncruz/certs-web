import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWaitingForWetSignatures } from './stop-waiting-for-wet-signatures';

describe('StopWaitingForWetSignatures', () => {
  let component: StopWaitingForWetSignatures;
  let fixture: ComponentFixture<StopWaitingForWetSignatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopWaitingForWetSignatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopWaitingForWetSignatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
