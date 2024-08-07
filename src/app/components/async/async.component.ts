import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { DataService } from '../../data.service';
import { generateRandomColor } from '../../generateRandomColor';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AsyncComponent {

  color = generateRandomColor();

  constructor(private dataService: DataService, private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }

  increase() {
    this.dataService.increase();
  }

}