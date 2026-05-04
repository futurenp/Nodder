import { Component } from '@angular/core';
import { PageCard } from '../components/page-card/page-card';
import { PublishSwitcher } from '../components/publish-switcher/publish-switcher';

@Component({
  selector: 'app-publish',
  imports: [PageCard, PublishSwitcher],
  templateUrl: './publish.html',
  styleUrl: './publish.css',
})
export class Publish {}
