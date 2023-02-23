import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import PostCardComponent from 'src/app/layouts/post-card/post-card.component';
import CommentFormComponent from 'src/app/comments/comment-form/comment-form.component';
import CommentListComponent from 'src/app/comments/comment-list/comment-list.component';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [
    CommonModule,
    CommentFormComponent,
    CommentListComponent,
    PostCardComponent,
  ],
  template: `
    <div class="container" *ngIf="post">
      <div class="row">
        <div class="col-md-9">
          <div class="card shadow-effect">
            <img
              src="{{ post.postImg }}"
              alt=""
              class="card-img-top img-fluid"
            />
            <div class="card-body">
              <small class="bg-light text-danger text-center">
                {{ post.category.category }}
              </small>
              <small class="bg-light text-success text-center ml-2">
                {{ post.isFeatured ? 'Featured' : '' }}
              </small>
              <small class="bg-light text-info text-center ml-2">
                Views - {{ post.views | number }}
              </small>
              <small class="bg-light text-warning text-center ml-2">
                LAST UPDATED - {{ post.createdAt | date }}
              </small>
              <h1 class="mt-3 mb-3">{{ post.title }}</h1>
              <p [innerHTML]="post.content"></p>
            </div>
            <app-comment-form></app-comment-form>
            <app-comment-list></app-comment-list>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mb-3" *ngFor="let spost of similar">
            <app-post-card [postData]="spost"></app-post-card>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export default class SinglePostComponent implements OnInit, OnDestroy {
  componentIsDestroyed = new Subject<boolean>();
  post!: Post;
  similar: Post[] = [];

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      this.postsService
        .getByKey(val['id'])
        .pipe(takeUntil(this.componentIsDestroyed))
        .subscribe({
          next: (data) => {
            this.post = data;
            this.loadSimilar(data.category['categoryId']);
          },
        });
    });
  }

  loadSimilar(categoryId: number) {
    this.postsService
      .getSimilar(categoryId, 'createdAt', 'desc', 4)
      .pipe(takeUntil(this.componentIsDestroyed))
      .subscribe({
        next: (data) => {
          console.log(data);
          this.similar = data;
        },
      });
  }

  ngOnDestroy(): void {
    this.componentIsDestroyed.next(true);
    this.componentIsDestroyed.complete();
  }
}
