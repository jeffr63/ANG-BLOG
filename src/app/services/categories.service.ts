import { Injectable } from '@angular/core';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Category } from '../models/category';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends EntityCollectionServiceBase<Category> {
  categories: Category[] = [];

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Categories', serviceElementsFactory);
  }
}
