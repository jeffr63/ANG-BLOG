import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item ml-3">
              <a class="nav-link" href="">Design</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="">Inspiration</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="">Sports</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link" href="">Politics</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        margin-top: 100px;
        height: 50px;
        background-color: var(--navbar-footer-color);
      }

      .nav-link {
        text-transform: uppercase;
      }
    `,
  ],
})
export default class CategoryNavbarComponent {}
