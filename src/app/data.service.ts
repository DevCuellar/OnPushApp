import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  value = 0;
  @Output() dataChanged$: EventEmitter<number> = new EventEmitter<number>;

  constructor() { }

  increase() {
    this.value++;
    this.dataChanged$.emit(this.value);
  }
}
