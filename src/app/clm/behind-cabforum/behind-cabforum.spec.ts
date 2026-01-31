import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindCABForum } from './behind-cabforum';

describe('BehindCABForum', () => {
  let component: BehindCABForum;
  let fixture: ComponentFixture<BehindCABForum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehindCABForum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehindCABForum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
