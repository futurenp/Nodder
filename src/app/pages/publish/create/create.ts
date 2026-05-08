import {Component, inject} from '@angular/core';
import {HorizontalSwitcher} from '../../../components/horizontal-switcher/horizontal-switcher';
import {InputBox} from '../../../components/input-box/input-box';
import {StorageKeys} from '../../../model/StorageKeys';
import {StorageService} from '../../../services/storage-service';
import {PlatformsService} from '../../../services/platforms-service';
import { ApiService } from '../../../services/api-service';
import { ModrinthData } from '../../../model/ModrinthData';
import { ModrinthResponse } from '../../../model/ModrinthResponse';
import { Label } from '../../../model/Label';

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
  apiService = inject(ApiService);
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

    let data: ModrinthData = {
      title: this.storage.get(this.Keys.Create.NAME),
      description: this.storage.get(this.Keys.Create.SUMMARY),
      requested_status: 'unlisted',
      project_type: 'mod',
      is_draft: true,
      slug: 'tiejifjijfi',
      body: "",
      server_side: 'required',
      client_side: 'required',
      initial_versions: [],
      categories: ['magic'],
      license_id: 'MIT',
    };

    this.apiService.createProject(data).subscribe({
      next: (response) => {
        console.log('Project created successfully!', response);
        alert('Project created successfully!');
      },
      error: (err) => {
        console.error('Failed to create project', err);
        alert('Failed to create project. Check the console.');
      },
    });
  }

  clear() {
    this.storage.remove(this.createKeys);
  }
}
