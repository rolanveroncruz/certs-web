import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLMEndToEnd } from './clmend-to-end';

describe('CLMEndToEnd', () => {
  let component: CLMEndToEnd;
  let fixture: ComponentFixture<CLMEndToEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLMEndToEnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLMEndToEnd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
