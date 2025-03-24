import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NavBarItem } from '../types';

@Component({
  selector: 'app-nav-bar-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <li>
      <a class=""
        ><span class="">{{ link().label }}</span></a
      >
    </li>
  `,
  styles: ``,
})
export class NavBarListItemComponent {
  link = input.required<NavBarItem>();
}
