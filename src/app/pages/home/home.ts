import { Component } from '@angular/core';
import { PageCard } from '../../components/page-card/page-card';

@Component({
  selector: 'app-home',
  imports: [PageCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
