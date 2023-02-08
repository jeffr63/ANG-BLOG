import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, Subject, takeUntil } from 'rxjs';

import PostCardComponent from 'src/app/layouts/post-card/post-card.component';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';

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
          <div class="col-md-4 mt-3" *ngFor="let post of featured">
            <app-post-card [postData]="post"></app-post-card>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-5">
      <div class="col-md-12 text-center">
        <h2>Latest Posts</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <div class="col-md-4 mt-4" *ngFor="let post of latest">
            <app-post-card [postData]="post"></app-post-card>
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
export default class HomeComponent implements OnInit, OnDestroy {
  componentIsDestroyed = new Subject<boolean>();
  featured: Post[] = [];
  latest: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService
      .getFeatured('createdAt', 'desc', 3)
      .pipe(takeUntil(this.componentIsDestroyed))
      .subscribe({
        next: (data) => {
          this.featured = data;
        },
      });

    this.postsService
      .getLatest('createdAt', 'desc', 9)
      .pipe(takeUntil(this.componentIsDestroyed))
      .subscribe({
        next: (data) => {
          this.latest = data;
        },
      });
  }

  ngOnDestroy(): void {
    this.componentIsDestroyed.next(true);
    this.componentIsDestroyed.complete();
  }
}
