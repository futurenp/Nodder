import { Component, input } from '@angular/core';

@Component({
  selector: 'app-token-input',
  imports: [],
  templateUrl: './token-input.html',
  styleUrl: './token-input.css',
})
export class TokenInput {
  platform = input("Plaform");
}
