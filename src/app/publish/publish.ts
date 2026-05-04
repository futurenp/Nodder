import { Component } from '@angular/core';
import { PageCard } from '../components/page-card/page-card';
import { PublishSwitcher } from '../components/publish-switcher/publish-switcher';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-publish',
  imports: [PageCard, PublishSwitcher, RouterOutlet],
  templateUrl: './publish.html',
  styleUrl: './publish.css',
})
export class Publish {}
