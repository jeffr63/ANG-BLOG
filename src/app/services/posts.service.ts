import { Injectable } from '@angular/core';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { take, tap } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostsService extends EntityCollectionServiceBase<Post> {
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Posts', serviceElementsFactory);
  }
}
