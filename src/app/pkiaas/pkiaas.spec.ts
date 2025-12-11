import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pkiaas } from './pkiaas';

describe('Pkiaas', () => {
  let component: Pkiaas;
  let fixture: ComponentFixture<Pkiaas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pkiaas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pkiaas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
