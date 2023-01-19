import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card shadow-effect">
      <img
        class="card-img-top"
        src="https://images.pexels.com/photos/1174932/pexels-photo-1174932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Person's hand with paints"
      />
      <div class="card-body">
        <small class="bg-light text-danger text-center">Design</small>
        <small class="bg-light text-success text-center ml-3">Featured</small>
        <small class="bg-light text-info text-center ml-3"
          >Views - 100,256</small
        >

        <h5 class="mt-1">HOW TO START A BLOG IN 2021 EDITED NEW CATEGORY</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vestibulum augue vitae mauris sollicitudin mattis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus suscipit leo tempus
          leo egestas efficitur. Proin non semper enim, quis semper odio. Sed at
          ex at lacus volutpat consequat. Aenean nec tellus vel metus blandit
          semper eu vitae tellus. Vestibulum tincidunt metus libero, in tempor
          lacus tristique in.
        </p>
        <small class="bg-light text-warning text-center"
          >LAST UPDATED - SEP 20, 2020</small
        >
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        max-width: 400px;
      }
    `,
  ],
})
export default class PostCardComponent {}
