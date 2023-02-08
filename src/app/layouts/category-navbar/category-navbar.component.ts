import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { Observable, Subject, takeUntil } from 'rxjs';

import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav" *ngFor="let category of categories$ | async">
            <li class="nav-item ml-3">
              <a class="nav-link">{{ category.category }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        margin-top: 100px;
        height: 50px;
        background-color: var(--navbar-footer-color);
      }

      .nav-link {
        text-transform: uppercase;
      }
    `,
  ],
  imports: [CommonModule, NgFor],
})
export default class CategoryNavbarComponent implements OnInit, OnDestroy {
  componentIsDestroyed = new Subject<boolean>();
  categories$ = this.categoriesService.entities$.pipe(
    takeUntil(this.componentIsDestroyed)
  );

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getAll();
  }

  ngOnDestroy(): void {
    this.componentIsDestroyed.next(true);
    this.componentIsDestroyed.complete();
  }
}
