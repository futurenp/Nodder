import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('Nodder');
}
