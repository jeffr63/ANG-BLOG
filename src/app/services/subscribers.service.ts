import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Sub } from '../models/sub';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService extends EntityCollectionServiceBase<Sub> {
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private toastr: ToastrService
  ) {
    super('Subscribers', serviceElementsFactory);
  }

  saveData(data: Sub) {
    const subscriberObserver = {
      next: (res: any) => this.toastr.success('Subscriber added successfully!'),
      error: (error: any) =>
        this.toastr.error('Could not add subscriber: ' + error),
    };
    this.add(data).pipe(take(1)).subscribe(subscriberObserver);
  }

  checkSubs(email: string): Observable<Sub[]> {
    return this.getWithQuery(`email=${email}`);
  }
}
