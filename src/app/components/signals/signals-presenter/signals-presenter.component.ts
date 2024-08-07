import { ChangeDetectionStrategy, Component, NgZone, signal } from '@angular/core';
import { generateRandomColor } from '../../../generateRandomColor';

@Component({
  selector: 'app-signals-presenter',
  templateUrl: './signals-presenter.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SignalsPresenterComponent {
  
  color = generateRandomColor();

  value = signal<number>(0);
  timer: any = null;

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }

  activeInterval() {
    this.timer = setInterval(() => {
      this.value.set(this.value() + 1);
    }, 1000);
  }

  stopInterval() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

}
