import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { generateRandomColor } from '../../../generateRandomColor';

@Component({
  selector: 'app-folder-c',
  templateUrl: './folder-c.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FolderCComponent {
  
  color = generateRandomColor();

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }
}