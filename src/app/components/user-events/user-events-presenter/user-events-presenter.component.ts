import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../../generateRandomColor';

@Component({
  selector: 'app-user-events-presenter',
  templateUrl: './user-events-presenter.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEventsPresenterComponent {

  color = generateRandomColor();
  value = 0;

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }

  increase() {
    this.value++;
  }

}
