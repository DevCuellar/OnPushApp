import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from './generateRandomColor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  
  title = 'Angular Change Detection';
  color = generateRandomColor();

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }
}
