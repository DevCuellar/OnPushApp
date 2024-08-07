import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../../generateRandomColor';

@Component({
  selector: 'app-folder-b',
  templateUrl: './folder-b.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FolderBComponent {

  color = generateRandomColor();

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }
}