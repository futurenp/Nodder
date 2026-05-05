import { Component, effect, inject, input, model, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage-service';

@Component({
  selector: 'app-input-box',
  imports: [],
  templateUrl: './input-box.html',
  styleUrl: './input-box.css',
})
export class InputBox implements OnInit {
  saver = inject(StorageService);
  placeholder = input<string>('Type here...');
  saveLoc = input.required<string>();
  value = model<string>();

  constructor() {
    effect(
      () => {
        const triggerEvent = this.saver.removeTrigger();
        if (triggerEvent.keys.includes(this.saveLoc())) {
          this.value.set('');
        }
      });
  }

  ngOnInit() {
    this.value.set(this.saver.get(this.saveLoc()));
  }

  onChange($event: Event) {
    let element = $event.target as HTMLInputElement;
    this.value.set(element.value);
    this.saver.save(this.saveLoc(), element.value);
  }
}
