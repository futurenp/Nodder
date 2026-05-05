import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import {Label} from '../../model/Label';
import { StorageService } from '../../services/storage-service';

@Component({
  selector: 'app-horizontal-switcher',
  imports: [],
  templateUrl: './horizontal-switcher.html',
  styleUrl: './horizontal-switcher.css',
})
export class HorizontalSwitcher implements OnInit {
  saver = inject(StorageService);
  labels = input.required<Label[]>();
  saveLoc = input.required<string>();
  public selected = signal<Label | null>(null);
  savedLabel = computed(() => this.saver.get(this.saveLoc()));

  constructor() {
    effect(() => {
      const triggerEvent = this.saver.removeTrigger();
      if (triggerEvent.keys.includes(this.saveLoc())) {
        this.selected.set(null);
      }
    });
  }

  ngOnInit(): void {
    let label: Label = this.savedLabel();
    this.selected.set(label);
  }

  selectLabel(label: Label) {
    this.selected.set(label);
    this.saver.save(this.saveLoc(), label);
  }
}
