import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CounterStore } from '../services/counter-store';
import { FizzbuzzComponent } from '../components/fizzbuzz';

@Component({
  selector: 'app-counter-ui-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FizzbuzzComponent],
  template: `
    <div>
      <button
        [disabled]="store.decrementShouldBeDisabled()"
        (click)="store.decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ store.current() }}</span>
      <button (click)="store.increment()" class="btn btn-primary">+</button>
    </div>

    <app-fizzbuzz />
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
}
