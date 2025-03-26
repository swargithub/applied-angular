import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="card bg-base-300 w-fit shadow-sm">
    <div class="card-body">
      <h2 class="card-title">{{ title() }}</h2>

      <ng-content></ng-content>
    </div>
  </div>`,
  styles: ``,
})
export class CardComponent {
  title = input.required<string>();
}
