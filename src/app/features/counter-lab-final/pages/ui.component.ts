import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        [disabled]="current() === 0"
        (click)="decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ current() }}</span>
      <button (click)="increment()" class="btn btn-primary">+</button>
    </div>

    <div>
      <p>{{ fizzBuzz() }}</p>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  current = signal(0);

  increment() {
    this.current.update((c) => c + 1);
  }
  decrement() {
    this.current.update((c) => c - 1);
  }

  fizzBuzz = computed(() => {
    const current = this.current();
    if (current === 0) return '';
    if (current % 3 === 0 && current % 5 === 0) return 'FizzBuzz';
    if (current % 3 === 0) return 'Fizz';
    if (current % 5 === 0) return 'Buzz';
    return '';
  });
}
