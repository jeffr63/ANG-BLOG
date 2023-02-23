import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import PostCardComponent from 'src/app/layouts/post-card/post-card.component';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  template: `
    <div class="bg-theme p-5">
      <div class="container">
        <h1 class="text-white">{{ category }}</h1>
        <p class="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </div>

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-4 mb-3" *ngFor="let post of posts">
          <app-post-card [postData]="post"></app-post-card>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export default class SingleCategoryComponent implements OnInit, OnDestroy {
  componentIsDestroyed = new Subject<boolean>();
  posts: Post[] = [];
  category = '';

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((val) => {
      this.category = val['category'];

      this.postsService
        .getCategory(val['id'], 'createdAt', 'desc', 3)
        .pipe(takeUntil(this.componentIsDestroyed))
        .subscribe({
          next: (data) => {
            this.posts = data;
          },
        });
    });
  }

  ngOnDestroy(): void {
    this.componentIsDestroyed.next(true);
    this.componentIsDestroyed.complete();
  }
}
