import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../../generateRandomColor';

@Component({
  selector: 'app-developer-presenter',
  templateUrl: './developer-presenter.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DeveloperPresenterComponent {
  
  color = generateRandomColor();

  value = 0;
  timer: any = null;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }

  activeInterval() {
    this.timer = setInterval(() => {
      this.value ++;
      this.cdr.detectChanges();
    }, 1000);
  }

  stopInterval() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

}