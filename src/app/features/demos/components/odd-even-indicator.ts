import {
  Component,
  ChangeDetectionStrategy,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-odd-even-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      @switch (indicator()) {
        @case ('even') {
          <span class="badge badge-success">Even!</span>
        }
        @case ('odd') {
          <span class="badge badge-info">Odd!</span>
        }
        @case ('nada') {
          <span class="badge badge-accent">Good Luck!!</span>
        }
      }
    </div>
  `,
  styles: ``,
})
export class OddEvenIndicatorComponent {
  current = input.required<number>();

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
