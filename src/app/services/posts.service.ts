import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostsService extends EntityCollectionServiceBase<Post> {
  private baseUrl = 'http://localhost:3000';

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient
  ) {
    super('Posts', serviceElementsFactory);
  }

  public getLatest(fieldName: string, order: string, limit: number) {
    return this.http.get<Post[]>(
      `${this.baseUrl}/posts?_sort=${fieldName}&_order=${order}&_limit=${limit}`
    );
  }

  public getFeatured(fieldName: string, order: string, limit: number) {
    return this.http.get<Post[]>(
      `${this.baseUrl}/posts?_sort=${fieldName}&_order=${order}&_limit=${limit}&isFeatured=true`
    );
  }
}
