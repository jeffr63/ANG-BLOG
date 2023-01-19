import { Routes } from '@angular/router';

import HomeComponent from './pages/home/home.component';

export const APP_ROUTES: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  {
    path: 'category',
    title: 'Category',
    loadComponent: () =>
      import('./pages/single-category/single-category.component'),
  },
  {
    path: 'post',
    title: 'Post',
    loadComponent: () => import('./pages/single-post/single-post.component'),
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./pages/about-us/about-us.component'),
  },
  {
    path: 'terms-conditions',
    title: 'Terms and Conditions',
    loadComponent: () =>
      import('./pages/terms-and-conditions/terms-and-conditions.component'),
  },
  {
    path: 'contact',
    title: 'Contact Us',
    loadComponent: () => import('./pages/contact-us/contact-us.component'),
  },
];
