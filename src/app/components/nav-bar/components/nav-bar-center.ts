import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavBarItem } from '../types';
import { NavBarListItemComponent } from './nav-bar-list-item';

@Component({
  selector: 'app-nav-bar-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavBarListItemComponent],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for (link of links(); track $index) {
        <app-nav-bar-list-item [link]="link" />
      }
    </ul>
  `,
  styles: ``,
})
export class NavBarCenterComponent {
  links = input.required<NavBarItem[]>();
}
