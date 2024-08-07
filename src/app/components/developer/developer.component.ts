import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../generateRandomColor';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DeveloperComponent {

  color = generateRandomColor();

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }

}