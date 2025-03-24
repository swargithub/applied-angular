import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-demos-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>A Basic Signals Example</p>
    <div>
      <button (click)="decrement()" class="btn btn-error">-</button>
      <span class="m-4 text-lg">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-success">+</button>
    </div>
    @if (showReset()) {
      <button (click)="current.set(0)" class="btn btn-primary">Reset!</button>
    } @else {
      <p>Click the buttons!</p>
    }

    <div>
      @switch (indicator()) {
        @case ('even') {
          <span class="badge badge-success">Even!</span>
        }
        @case ('odd') {
          <span class="badge badge-info">Odd!</span>
        }
        @case ('nada') {
          <span class="badge badge-info">Good Luck!!</span>
        }
      }
    </div>
  `,
  styles: ``,
})
export class SignalsDemoComponent {
  current = signal(0);

  showReset = computed(() => this.current() !== 0);

  decrement() {
    this.current.update((c) => c - 1);
  }
  increment() {
    this.current.update((c) => c + 1);
  }

  indicator = computed(() => {
    const current = this.current();
    if (current === 0) {
      return 'nada';
    }
    if (current % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  });
}
