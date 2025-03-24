import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Dashboard Goes Here</p> `,
  styles: ``,
})
export class DashboardComponent {}
