import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="containter">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="site-logo">ANG-BLOG</div>
            <div>
              <ul class="nav justify-content-center">
                <li class="nav-item"><a href="" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="" class="nav-link">About</a></li>
                <li class="nav-item">
                  <a href="" class="nav-link">Terms and Conditions</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">Contact</a>
                </li>
              </ul>
            </div>
            <p class="mb-2 mt-2">Copyright @ 2023 Angular Blogsite</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        height: 130px;
        padding: 15px;
        background-color: var(--navbar-footer-color);
      }

      .site-logo {
        font-size: 1.2em;
      }
    `,
  ],
})
export default class FooterComponent {}
