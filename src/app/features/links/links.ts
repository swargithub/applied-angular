import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListComponent } from './components/list';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListComponent],
  template: ` <app-links-list /> `,
  styles: ``,
})
export class LinksComponent {}
