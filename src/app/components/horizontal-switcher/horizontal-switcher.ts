import {Component, Input, input, signal} from '@angular/core';
import {Label} from '../../model/Label';

@Component({
  selector: 'app-horizontal-switcher',
  imports: [],
  templateUrl: './horizontal-switcher.html',
  styleUrl: './horizontal-switcher.css',
})
export class HorizontalSwitcher {
  labels = input.required<Label[]>();
  public selected = signal<Label | null>(null);

  selectLabel(label: Label) {
    this.selected.set(label);
  }
}
