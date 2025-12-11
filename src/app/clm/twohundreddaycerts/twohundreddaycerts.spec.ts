import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twohundreddaycerts } from './twohundreddaycerts';

describe('Twohundreddaycerts', () => {
  let component: Twohundreddaycerts;
  let fixture: ComponentFixture<Twohundreddaycerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twohundreddaycerts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twohundreddaycerts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
