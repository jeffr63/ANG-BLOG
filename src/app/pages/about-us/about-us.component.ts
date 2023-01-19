import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mt-5">
      <div class="container mt-5 mb-5 p-5 bg-theme">
        <h1 class="text-white text-center">About Us</h1>
        <div class="p-5 mt-4 bg-secondary-theme text-theme-primary">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            labore iste veniam aliquid magni odit ad excepturi laborum
            aspernatur sequi alias quaerat possimus, officia quasi ut atque
            facilis. Quos, repellendus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            labore iste veniam aliquid magni odit ad excepturi laborum
            aspernatur sequi alias quaerat possimus, officia quasi ut atque
            facilis. Quos, repellendus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            labore iste veniam aliquid magni odit ad excepturi laborum
            aspernatur sequi alias quaerat possimus, officia quasi ut atque
            facilis. Quos, repellendus.
          </p>

          <div class="text-center">
            <button class="btn btn-info btn-sm mt-4 button-theme">
              BACK TO HOME
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export default class AboutUsComponent {}
