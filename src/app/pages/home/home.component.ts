import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import PostCardComponent from 'src/app/layouts/post-card/post-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  template: `
    <section class="featured-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center mt-5">
            <h2 class="text-white">Featured Posts</h2>
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <app-post-card></app-post-card>
          </div>
          <div class="col-lg-3">
            <app-post-card></app-post-card>
          </div>
          <div class="col-lg-3">
            <app-post-card></app-post-card>
          </div>
          <div class="col-lg-3">
            <app-post-card></app-post-card>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-5">
      <div class="col-md-12 text-center">
        <h2>Latest Posts</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <div class="col-md-4 mt-3">
            <app-post-card></app-post-card>
          </div>
          <div class="col-md-4 mt-3">
            <app-post-card></app-post-card>
          </div>
          <div class="col-md-4 mt-3">
            <app-post-card></app-post-card>
          </div>
          <div class="col-md-4 mt-3">
            <app-post-card></app-post-card>
          </div>
          <div class="col-md-4 mt-3">
            <app-post-card></app-post-card>
          </div>
          <div class="col-md-4 mt-3">
            <app-post-card></app-post-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .featured-section {
        padding-left: 130px;
        padding-right: 130px;
        padding-bottom: 130px;
        background-color: var(--primary-color);
      }
    `,
  ],
})
export default class HomeComponent {}
