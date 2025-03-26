import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { CounterStore } from '../services/counter-store';

@Component({
  selector: 'app-counter-prefs-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join">
      <select>
        @for (by of store.availableCountByValues; track $index) {
          <option [value]="by">{{ by }}</option>
        }
      </select>
    </div>
  `,
  styles: ``,
})
export class PrefsWithDropdownComponent {
  store = inject(CounterStore);
}
