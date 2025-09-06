import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTheRight } from './choose-the-right';

describe('ChooseTheRight', () => {
  let component: ChooseTheRight;
  let fixture: ComponentFixture<ChooseTheRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseTheRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTheRight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
