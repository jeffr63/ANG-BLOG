import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
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
          <div *ngIf="isEmailError" class="alert alert-danger mt-3">
            Email is already in use
          </div>
          <div *ngIf="isSubscribed" class="alert alert-success mt-3">
            Thank you for subcribing to our news service. Stay turned for new
            blog posts.
          </div>
          <form
            class="form-inline mb-3 mt-3"
            #subForm="ngForm"
            (ngSubmit)="onSubmit(subForm)"
            *ngIf="!isSubscribed"
          >
            <div class="form-group col-md-5">
              <input
                type="text"
                class="form-control shadow-effect"
                placeholder="Your Name"
                name="name"
                ngModel
                required
                #Name="ngModel"
                [ngClass]="{ 'is-invalid': Name.touched && Name.invalid }"
              />
              <div class="text-danger" *ngIf="Name.touched && Name.invalid">
                <div *ngIf="Name.errors?.['required']">Name is required</div>
              </div>
            </div>

            <div class="form-group col-md-5">
              <input
                type="email"
                class="form-control shadow-effect"
                placeholder="Email Address"
                name="email"
                ngModel
                required
                email
                #Email="ngModel"
                [ngClass]="{ 'is-invalid': Email.touched && Email.invalid }"
              />
              <div class="text-danger" *ngIf="Email.touched && Email.invalid">
                <div *ngIf="Email.errors?.['required']">Email is required</div>
                <div *ngIf="Email.errors?.['email']">
                  Please enter a valid email address
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <button
                class="btn btn-info btn-block button-theme"
                [disabled]="subForm.invalid"
              >
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
  imports: [CommonModule, FormsModule],
})
export default class SubscriptionFormComponent {
  subData!: Sub[];
  isEmailError = false;
  isSubscribed = false;

  constructor(
    private subscribersService: SubscribersService,
    private toastr: ToastrService
  ) {}

  onSubmit(formData: any) {
    const subData: Sub = {
      name: formData.value.name,
      email: formData.value.email,
    };
    this.subscribersService.checkSubs(subData.email).subscribe((data) => {
      if (data.length > 0) {
        this.toastr.warning('This email is already subscribed.');
        this.isEmailError = true;
        this.isSubscribed = false;
      } else {
        this.subscribersService.saveData(subData);
        formData.reset();
        this.isEmailError = false;
        this.isSubscribed = true;
      }
    });
  }
}
