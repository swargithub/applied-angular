import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FizzbuzzComponent } from '../components/fizzbuzz';
import { CounterStore } from '../services/counter-store';
import { ButtonDirective } from '@app-shared/directives';

@Component({
  selector: 'app-counter-ui-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FizzbuzzComponent, ButtonDirective],
  template: `
    <div>
      <button
        appButton
        class="m-4"
        round
        intent="secondary"
        [disabled]="store.decrementShouldBeDisabled()"
        (click)="store.decrement()"
        aria-label="Decrement counter"
      >
        -
      </button>
      <span aria-live="polite">{{ store.current() }}</span>
      <button
        class="m-4"
        (click)="store.increment()"
        appButton
        round
        aria-label="Increment counter"
      >
        +
      </button>
    </div>

    <app-fizzbuzz />
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
}
