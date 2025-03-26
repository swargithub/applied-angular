import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterStore } from './services/counter-store';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav';

@Component({
  selector: 'app-counter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNavComponent],
  providers: [CounterStore],
  template: ` <app-section-nav sectionName="Counter Lab" [links]="links()" /> `,
  styles: ``,
})
export class CounterComponent {
  links = signal([
    {
      href: 'ui',
      label: 'Counter',
    },
    {
      href: 'prefs',
      label: 'Preferences',
    },
  ]);
}
