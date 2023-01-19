import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import PostCardComponent from 'src/app/layouts/post-card/post-card.component';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  template: `
    <div class="bg-theme p-5">
      <div class="container">
        <h1 class="text-white">General Knowledge</h1>
        <p class="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </div>

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-4 mb-3">
          <app-post-card></app-post-card>
        </div>
        <div class="col-md-4 mb-3">
          <app-post-card></app-post-card>
        </div>
        <div class="col-md-4 mb-3">
          <app-post-card></app-post-card>
        </div>
        <div class="col-md-4 mb-3">
          <app-post-card></app-post-card>
        </div>
        <div class="col-md-4 mb-3">
          <app-post-card></app-post-card>
        </div>
        <div class="col-md-4 mb-3">
          <app-post-card></app-post-card>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export default class SingleCategoryComponent {}
