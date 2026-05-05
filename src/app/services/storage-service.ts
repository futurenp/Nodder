import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public removeTrigger = signal<{ keys: string[]; tick: number }>({ keys: [], tick: 0 });

  save(key: string, obj: any) {
    if (!obj) return;
    let str = JSON.stringify(obj);
    localStorage.setItem(key, str);
  }

  get(key: string): any {
    if (key in localStorage) {
      return JSON.parse(localStorage[key]);
    } else {
      return '';
    }
  }

  remove(keys: string[]) {
    keys.forEach((key) => localStorage.removeItem(key));
    this.removeTrigger.update((state) => ({
      keys: keys,
      tick: state.tick + 1,
    }));
  }
}
