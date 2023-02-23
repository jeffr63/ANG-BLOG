import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="navbar navbar-expand-lg fixed-top bg-white">
      <div class="container justify-content-center">
        <a class="site-logo" routerLink="/"> ANG-BLOG </a>
      </div>
    </header>
  `,
  styles: [
    `
      header {
        height: 100px;
      }

      .site-logo {
        font-size: 1.5em;
      }
    `,
  ],
})
export default class HeaderComponent {}
