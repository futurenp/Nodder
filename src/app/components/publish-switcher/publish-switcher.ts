import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-publish-switcher',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './publish-switcher.html',
  styleUrl: './publish-switcher.css',
})
export class PublishSwitcher {}
