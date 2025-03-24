import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for (link of links(); track $index) {
        <li>{{ link.label }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class NavBarCenterComponent {
  links = input.required<{ href: string; label: string }[]>();
}
