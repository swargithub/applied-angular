import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListComponent } from './components/list';
import { LinksDataService } from './services/links-data';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LinksDataService],
  imports: [ListComponent],
  template: ` <app-links-list /> `,
  styles: ``,
})
export class LinksComponent {}
