import { Component, computed, inject, input } from '@angular/core';
import { PlatformsService } from '../../services/platforms-service';
import { ToggleSwitch } from '../toggle-switch/toggle-switch';

@Component({
  selector: 'app-token-input',
  imports: [ToggleSwitch],
  templateUrl: './token-input.html',
  styleUrl: './token-input.css',
})
export class TokenInput {
  public platformService = inject(PlatformsService);

  platformInput = input.required<string>();
  platform = computed(() => this.platformService.getPlatform(this.platformInput()));

  onUpdateApiText($event: KeyboardEvent): void {
    const current = this.platform();
    if (!current) return;
    const inputElement = $event.target as HTMLInputElement;
    current.apiKey = inputElement.value;
    this.platformService.updatePlatform(current);
  }

  onClickCheckbox($event: MouseEvent): void {
    const current = this.platform();
    if (!current) return;
    const checkboxElement = $event.target as HTMLInputElement;
    current.enabled = checkboxElement.checked;
    this.platformService.updatePlatform(current);
  }
}
