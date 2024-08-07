import { ChangeDetectionStrategy, Component, Input, NgZone } from '@angular/core';
import { generateRandomColor } from '../../../generateRandomColor';

@Component({
  selector: 'app-inputs-presenter',
  templateUrl: './inputs-presenter.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsPresenterComponent {
  
  color = generateRandomColor();
  @Input() value: number = 0;

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }
}
