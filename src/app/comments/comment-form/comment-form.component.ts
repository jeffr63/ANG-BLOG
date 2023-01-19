import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card mt-5 shadow-effect">
      <div class="card-body">
        <h4>Leave a Comment</h4>
        <p>You can leave a comment using this comment form</p>

        <form>
          <div class="form-group">
            <label for="">Name</label>
            <input
              type="text"
              class="form-control shadow-effect"
              placeholder="Enter your name"
            />
          </div>

          <div class="form-group">
            <label for="">Comment</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="form-control shadow-effect"
              placeholder="Add your comment here"
            ></textarea>
          </div>

          <button class="btn btn-info button-theme">Add a Comment</button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      input[type='text'],
      input[type='email'] {
        width: 100%;
      }

      .btn-theme {
        height: 50px;
        border: none;
        font-size: 13px;
        background-color: var(--primary-color);
      }
    `,
  ],
})
export default class CommentFormComponent {}
