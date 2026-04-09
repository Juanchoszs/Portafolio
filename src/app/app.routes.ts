import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(c => c.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then(c => c.AboutComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects').then(c => c.ProjectsComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./features/project-detail/project-detail').then(c => c.ProjectDetailComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then(c => c.ContactComponent)
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
