import { Injectable, signal } from '@angular/core';
import { Platform } from '../model/Platform';
import { StorageKeys } from '../model/StorageKeys';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  readonly Keys = StorageKeys;
  private readonly platformsList = signal<Platform[]>([
    { id: this.Keys.Platforms.MODRINTH, name: 'Modrinth', apiKey: '', enabled: false },
    { id: this.Keys.Platforms.CURSEFORGE, name: 'CurseForge', apiKey: '', enabled: false },
  ]);

  //I made this before I made the storage service, so this really should be using that, but otherwise this is okay

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    this.platformsList.update((currentList) =>
      currentList.map((platform) => {
        const savedData = localStorage.getItem(platform.id);

        if (savedData) {
          try {
            const parsed = JSON.parse(savedData);
            return { ...platform, ...parsed };
          } catch (error) {
            console.error(`Failed to load data for ${platform.id}`, error);
            return platform;
          }
        }
        return platform;
      }),
    );
  }

  public platforms = this.platformsList.asReadonly();

  public getPlatform(platformId: string) {
    return this.platforms().find((p) => p.id === platformId);
  }

  updatePlatform(platform: Platform) {
    this.platformsList.update((current) =>
      current.map((p) => (p.id === platform.id ? platform : p)),
    );

    localStorage.setItem(platform.id, JSON.stringify(platform));
  }

  resetPlatformInformation() {
    this.platformsList.update((currentList) =>
      currentList.map((platform) => {
        const resetPlatform = { ...platform, apiKey: '', enabled: false };
        localStorage.setItem(resetPlatform.id, JSON.stringify(resetPlatform));
        return resetPlatform;
      }),
    );
  }
}
