import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformYourDocumentSecurity } from './transform-your-document-security';

describe('TransformYourDocumentSecurity', () => {
  let component: TransformYourDocumentSecurity;
  let fixture: ComponentFixture<TransformYourDocumentSecurity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformYourDocumentSecurity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformYourDocumentSecurity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
