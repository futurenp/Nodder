import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./home/home');
      return m.Home;
    },
  },
  {
    path: 'statistics',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./statistics/statistics');
      return m.Statistics;
    },
  },
  {
    path: 'publish',
    loadComponent: async () => {
      const m = await import('./publish/publish');
      return m.Publish;
    },
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
      {
        path: 'new',
        loadComponent: async () => {
          const m = await import('./publish/new/new');
          return m.New;
        },
      },
      {
        path: 'update',
        loadComponent: async () => {
          const m = await import('./publish/update/update');
          return m.Update;
        },
      },
      {
        path: 'info',
        loadComponent: async () => {
          const m = await import('./publish/info/info');
          return m.Info;
        },
      },
    ],
  },
  {
    path: 'user',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./user/user');
      return m.User;
    },
  },
  {
    path: 'readme',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./readme/readme');
      return m.Readme;
    },
  },
];
