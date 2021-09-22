import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading$ = new Subject<boolean>();

  constructor() { }

  async show() {
    this.loading$.next(true);
  }

  async hide() {
    this.loading$.next(false);
  }
}