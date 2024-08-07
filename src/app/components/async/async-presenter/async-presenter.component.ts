import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { DataService } from '../../../data.service';
import { generateRandomColor } from '../../../generateRandomColor';

@Component({
  selector: 'app-async-presenter',
  templateUrl: './async-presenter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPresenterComponent {

  color = generateRandomColor();
  value$ = this.dataService.dataChanged$;

  constructor(private dataService: DataService, private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      this.color = generateRandomColor();
    });
  }
}