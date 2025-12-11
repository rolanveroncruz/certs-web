import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSigning } from './digital-signing';

describe('DigitalSigning', () => {
  let component: DigitalSigning;
  let fixture: ComponentFixture<DigitalSigning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalSigning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalSigning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
