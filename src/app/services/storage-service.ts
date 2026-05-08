import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  //used to clear items from elements
  public removeTrigger = signal<{ keys: string[]; tick: number }>({ keys: [], tick: 0 });

  save(key: string, obj: any) {
    if (obj === undefined || obj === null) return;
    let str = JSON.stringify(obj);
    localStorage.setItem(key, str);
    this.removeTrigger.update((state) => ({
      keys: state.keys.filter((newKey) => key != newKey),
      tick: state.tick
    }));
  }

  get(key: string): any {
    if (key in localStorage) {
      return JSON.parse(localStorage[key]);
    } else {
      return null;
    }
  }

  remove(keys: string[]) {
    keys.forEach((key) => localStorage.removeItem(key));
    this.removeTrigger.update((state) => ({
      keys: keys,
      tick: state.tick,
    }));
  }
}
