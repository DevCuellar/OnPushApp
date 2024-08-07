import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../generateRandomColor';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {
  
  color = generateRandomColor();

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }
}
