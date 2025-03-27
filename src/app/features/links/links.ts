import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav';
import { LinksDataService } from './services/links-data';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LinksDataService],
  imports: [SectionNavComponent],
  template: `
    <app-section-nav
      sectionName="Developer Resources"
      [links]="[
        {
          label: 'List',
          href: '/links/list',
        },
      ]"
    />
  `,
  styles: ``,
})
export class LinksComponent {}
