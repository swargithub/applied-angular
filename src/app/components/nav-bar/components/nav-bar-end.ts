import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-end',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: ` <a routerLink="profile" class="btn">Your Profile</a> `,
  styles: ``,
})
export class NavBarEndComponent {}
