import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./home/home');
      return m.Home;
    }
  },
  {
    path: 'statistics',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./statistics/statistics');
      return m.Statistics;
    }
  },
  {
    path: 'publish',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./publish/publish');
      return m.Publish;
    }
  },
  {
    path: 'user',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./user/user');
      return m.User;
    }
  }
];
