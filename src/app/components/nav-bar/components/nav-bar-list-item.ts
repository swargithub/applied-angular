import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarItem } from '../types';

@Component({
  selector: 'app-nav-bar-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <li>
      <a [routerLink]="[link().href]"
        ><span class="">{{ link().label }}</span></a
      >
    </li>
  `,
  styles: ``,
})
export class NavBarListItemComponent {
  link = input.required<NavBarItem>();
}
