import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUser } from './reset-user';

describe('ResetUser', () => {
  let component: ResetUser;
  let fixture: ComponentFixture<ResetUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetUser],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
