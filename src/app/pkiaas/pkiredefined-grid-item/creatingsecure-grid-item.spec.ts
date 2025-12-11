import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingsecureGridItem } from './pkiredefined-grid-item';

describe('CreatingsecureGridItem', () => {
  let component: CreatingsecureGridItem;
  let fixture: ComponentFixture<CreatingsecureGridItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingsecureGridItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingsecureGridItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
