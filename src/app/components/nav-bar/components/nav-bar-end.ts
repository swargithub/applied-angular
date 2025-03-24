import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar-end',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <a class="btn">Click Me For a Good Time</a> `,
  styles: ``,
})
export class NavBarEndComponent {}
