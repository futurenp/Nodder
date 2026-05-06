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
      const m = await import('./pages/home/home');
      return m.Home;
    },
  },
  {
    path: 'statistics',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./pages/statistics/statistics');
      return m.Statistics;
    },
  },
  {
    path: 'publish',
    loadComponent: async () => {
      const m = await import('./pages/publish/publish');
      return m.Publish;
    },
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
      {
        path: 'create',
        loadComponent: async () => {
          const m = await import('./pages/publish/create/create');
          return m.Create;
        },
      },
      {
        path: 'update',
        loadComponent: async () => {
          const m = await import('./pages/publish/update/update');
          return m.Update;
        },
      },
      {
        path: 'info',
        loadComponent: async () => {
          const m = await import('./pages/publish/info/info');
          return m.Info;
        },
      },
    ],
  },
  {
    path: 'user',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./pages/user/user');
      return m.User;
    },
  },
  {
    path: 'readme',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./pages/readme/readme');
      return m.Readme;
    },
  },
];
