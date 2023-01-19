import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card shadow-effect">
      <div class="card-body">
        <div class="text-center mt-3 mb-5">
          <h3>SUBSCRIPTION FORM</h3>
          <p class="m-auto sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vestibulum augue vitae mauris sollicitudin mattis. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
          <form class="form-inline mb-3 mt-3">
            <div class="form-group col-md-5">
              <input
                type="text"
                class="form-control shadow-effect"
                placeholder="Your Name"
              />
            </div>

            <div class="form-group col-md-5">
              <input
                type="email"
                class="form-control shadow-effect"
                placeholder="Email Address"
              />
            </div>
            <div class="col-md-2">
              <button class="btn btn-info btn-block button-theme">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        background-color: var(--secondary-color);
        width: 1200px;
      }

      h3 {
        color: var(--primary-color);
      }

      .sub-text {
        width: 500px;
      }

      input[type='text'],
      input[type='email'] {
        width: 100%;
      }
    `,
  ],
})
export default class SubscriptionFormComponent {}
