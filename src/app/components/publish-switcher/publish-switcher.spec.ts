import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishSwitcher } from './publish-switcher';

describe('PublishSwitcher', () => {
  let component: PublishSwitcher;
  let fixture: ComponentFixture<PublishSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishSwitcher],
    }).compileComponents();

    fixture = TestBed.createComponent(PublishSwitcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
