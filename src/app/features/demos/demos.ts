import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav';

@Component({
  selector: 'app-demos-feature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNavComponent],
  template: `
    <app-section-nav sectionName="Demos From Teacher" [links]="links()" />
  `,
  styles: ``,
})
export class DemosComponent {
  links = input([
    { href: 'signals', label: 'Signals (Counter 101)' },
    { href: 'services', label: 'Services Demo' },
  ]);
}
