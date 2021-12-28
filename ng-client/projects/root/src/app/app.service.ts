import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private data$ = new BehaviorSubject<{}>({});

  constructor() {}

  getData$(): BehaviorSubject<{}> {
    return this.data$;
  }

  setData(data: {}): void {
    this.data$.next(data);
  }
}
