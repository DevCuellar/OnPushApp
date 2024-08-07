import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../generateRandomColor';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsComponent {

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
