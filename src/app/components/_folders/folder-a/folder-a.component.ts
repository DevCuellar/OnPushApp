import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../../generateRandomColor';

@Component({
  selector: 'app-folder-a',
  templateUrl: './folder-a.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FolderAComponent {

  color = generateRandomColor();

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }
}