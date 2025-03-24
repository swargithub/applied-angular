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
}
