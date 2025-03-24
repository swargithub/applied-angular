import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demos-feature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="flex gap-4">
      <a class="btn btn-primary" routerLink="signals">Signals</a>
    </div>
    <div class="pt-4">
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class DemosComponent {}
