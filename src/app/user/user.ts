import {Component, input, signal} from '@angular/core';
import {PageCard} from '../components/page-card/page-card';

@Component({
  selector: 'app-user',
  imports: [
    PageCard
  ],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  cardContent = signal("User Works!");
}
