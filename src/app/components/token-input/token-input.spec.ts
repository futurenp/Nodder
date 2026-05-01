import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenInput } from './token-input';

describe('TokenInput', () => {
  let component: TokenInput;
  let fixture: ComponentFixture<TokenInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenInput],
    }).compileComponents();

    fixture = TestBed.createComponent(TokenInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
