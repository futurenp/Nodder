import {Component, input, signal} from '@angular/core';
import {PageCard} from '../components/page-card/page-card';
import { TokenInput } from '../components/token-input/token-input';

@Component({
  selector: 'app-user',
  imports: [PageCard, TokenInput],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  cardContent = signal('User Works!');

  platforms = [
    "Modrinth",
    "CurseForge"
  ];
}
