import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import CategoryNavbarComponent from './layouts/category-navbar/category-navbar.component';
import FooterComponent from './layouts/footer/footer.component';
import HeaderComponent from './layouts/header/header.component';
import SubscriptionFormComponent from './subscription-form/subscription-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>

    <app-category-navbar></app-category-navbar>

    <div class="app-body">
      <router-outlet></router-outlet>
    </div>

    <div class="container justifiy-content-center mt-5 mb-5">
      <app-subscription-form></app-subscription-form>
    </div>

    <app-footer></app-footer>
  `,
  styles: [
    `
      .app-body {
        min-height: 35vh;
        margin-top: 150px;
      }
    `,
  ],
  imports: [
    RouterOutlet,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    SubscriptionFormComponent,
  ],
})
export class AppComponent {
  title = 'ANG-BLOG';
}
