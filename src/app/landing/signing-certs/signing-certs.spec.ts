import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningCerts } from './signing-certs';

describe('SigningCerts', () => {
  let component: SigningCerts;
  let fixture: ComponentFixture<SigningCerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigningCerts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigningCerts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
