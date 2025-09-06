import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSLCertificates } from './ssl-certificates';

describe('SSLCertificates', () => {
  let component: SSLCertificates;
  let fixture: ComponentFixture<SSLCertificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSLCertificates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSLCertificates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
