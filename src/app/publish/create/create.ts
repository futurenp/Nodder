import { Component } from '@angular/core';
import {HorizontalSwitcher} from '../../components/horizontal-switcher/horizontal-switcher';

@Component({
  selector: 'app-create',
  imports: [
    HorizontalSwitcher
  ],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {}
