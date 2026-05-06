import { Component, contentChildren, inject } from '@angular/core';
import {HorizontalSwitcher} from '../../components/horizontal-switcher/horizontal-switcher';
import { InputBox } from '../../components/input-box/input-box';
import { StorageKeys } from '../../model/StorageKeys';
import { StorageService } from '../../services/storage-service';
import { PlatformsService } from '../../services/platforms-service';

@Component({
  selector: 'app-create',
  imports: [HorizontalSwitcher, InputBox],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  readonly Keys = StorageKeys;
  storage = inject(StorageService);
  platformService = inject(PlatformsService);
  readonly createKeys: string[] =  [
    this.Keys.Create.NAME,
    this.Keys.Create.SUMMARY,
    this.Keys.Create.VISIBILITY
  ]

  create() {
    let valid = true;
    for (let key of this.createKeys) {
      let value = this.storage.get(key);
      if(!value) {
        valid = false;
      }
    }

    if(!valid) {
      alert("Null Entries found!\nCannot Save.");
      return;
    }

    let activePlatforms = this.platformService.platforms().filter((platform) => platform.enabled);

    if(activePlatforms.length == 0) {
      alert("No active platform found!\nCannot Save.");
      return;
    }

    console.log(JSON.stringify(this.storage.get(this.Keys.Platforms.MODRINTH)));

    //push to platforms
  }

  clear() {
    this.storage.remove(this.createKeys);
  }
}
