import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSwitcher } from './horizontal-switcher';

describe('HorizontalSwitcher', () => {
  let component: HorizontalSwitcher;
  let fixture: ComponentFixture<HorizontalSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalSwitcher],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalSwitcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
