import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../generateRandomColor';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserEventsComponent {
  
  color = generateRandomColor();

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }
}