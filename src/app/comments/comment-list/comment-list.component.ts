import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card mb-5 mt-5 pb-5 shadow-effect">
      <div class="card-body">
        <h4 class="mt-3 mb-3">Comments (15,256)</h4>

        <div class="comment-box mt-3">
          <h6 class="mb-0">John Doe</h6>
          <small class="text-danger">LAST UPDATED - SEP 20, 2021</small>
          <div class="mt-3 mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore at
            quos quisquam, deleniti accusantium impedit, ad libero magni ullam
            vel harum ducimus rerum eveniet?
          </div>
          <a href="#" class="mt-1">Reply</a>
          <a href="#" class="mt-1 ml-3">View Reply</a>
          <hr />
        </div>

        <div class="comment-box mt-3">
          <h6 class="mb-0">John Doe</h6>
          <small class="text-danger">LAST UPDATED - SEP 20, 2021</small>
          <div class="mt-3 mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore at
            quos quisquam, deleniti accusantium impedit, ad libero magni ullam
            vel harum ducimus rerum eveniet?
          </div>
          <a href="#" class="mt-1">Reply</a>
          <a href="#" class="mt-1 ml-3">View Reply</a>
          <hr />
        </div>

        <div class="comment-box mt-3">
          <h6 class="mb-0">John Doe</h6>
          <small class="text-danger">LAST UPDATED - SEP 20, 2021</small>
          <div class="mt-3 mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore at
            quos quisquam, deleniti accusantium impedit, ad libero magni ullam
            vel harum ducimus rerum eveniet?
          </div>
          <a href="#" class="mt-1">Reply</a>
          <a href="#" class="mt-1 ml-3">View Reply</a>
          <hr />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .comment-box {
        padding: 15px 35px;
        background-color: #f0f0f0;
      }
    `,
  ],
})
export default class CommentListComponent {}
