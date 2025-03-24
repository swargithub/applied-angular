import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
    </ul>
  `,
  styles: ``,
})
export class NavBarCenterComponent {}
