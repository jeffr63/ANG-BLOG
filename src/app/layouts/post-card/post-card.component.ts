import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  standalone: true,
  template: `
    <div class="card shadow-effect" *ngIf="postData">
      <img
        class="card-img-top"
        src="{{ postData.postImg }}"
        alt="Person's hand with paints"
      />
      <div class="card-body">
        <small class="bg-light text-danger text-center">{{
          postData.category.category
        }}</small>
        <small class="bg-light text-success text-center ml-3">Featured</small>
        <small class="bg-light text-info text-center ml-3"
          >Views - {{ postData.views }}</small
        >

        <h5 class="mt-1">{{ postData.title }}</h5>
        <p>{{ postData.excerpt }}</p>
        <small class="bg-light text-warning text-center">
          LAST UPDATED - {{ postData.createdAt | date }}
        </small>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        max-width: 400px;
        min-height: 750px;
      }
    `,
  ],
  imports: [CommonModule],
})
export default class PostCardComponent {
  @Input() postData!: Post;
}
