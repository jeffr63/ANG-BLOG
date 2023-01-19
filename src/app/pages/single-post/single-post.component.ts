import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import PostCardComponent from 'src/app/layouts/post-card/post-card.component';
import CommentFormComponent from 'src/app/comments/comment-form/comment-form.component';
import CommentListComponent from 'src/app/comments/comment-list/comment-list.component';

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
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="card shadow-effect">
            <img
              src="https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Art painting on wall"
              class="card-img-top img-fluid"
            />
            <div class="card-body">
              <small class="bg-light text-danger text-center">Design</small>
              <small class="bg-light text-success text-center ml-2"
                >Featured</small
              >
              <small class="bg-light text-info text-center ml-2"
                >Views - 100,256</small
              >
              <small class="bg-light text-warning text-center ml-2"
                >LAST UPDATED - SEP 20, 2021</small
              >
              <h1 class="mt-3 mb-3">
                HOW TO START A BLOG IN 2021 EDITED NEW CATEGORY
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                libero necessitatibus molestias sunt sit nulla tenetur pariatur?
                Ipsam voluptates officia eos. Quae recusandae aliquam
                necessitatibus voluptatum ad in, velit a! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repudiandae in ipsa veritatis
                aspernatur velit blanditiis neque tenetur excepturi repellendus
                perferendis, natus est, mollitia quaerat dignissimos non labore
                tempore quam voluptate.
                <br /><br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                libero necessitatibus molestias sunt sit nulla tenetur pariatur?
                Ipsam voluptates officia eos. Quae recusandae aliquam
                necessitatibus voluptatum ad in, velit a! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repudiandae in ipsa veritatis
                aspernatur velit blanditiis neque tenetur excepturi repellendus
                perferendis, natus est, mollitia quaerat dignissimos non labore
                tempore quam voluptate.
                <br /><br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                libero necessitatibus molestias sunt sit nulla tenetur pariatur?
                Ipsam voluptates officia eos. Quae recusandae aliquam
                necessitatibus voluptatum ad in, velit a! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repudiandae in ipsa veritatis
                aspernatur velit blanditiis neque tenetur excepturi repellendus
                perferendis, natus est, mollitia quaerat dignissimos non labore
                tempore quam voluptate.
              </p>
            </div>
            <app-comment-form></app-comment-form>
            <app-comment-list></app-comment-list>
          </div>
        </div>
        <div class="col-md-3">
          <app-post-card></app-post-card>
          <app-post-card></app-post-card>
          <app-post-card></app-post-card>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export default class SinglePostComponent {}
